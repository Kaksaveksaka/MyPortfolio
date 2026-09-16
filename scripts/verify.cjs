const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE_PATH || 'playwright');
(async () => {
 const { preview } = await import('vite');
 const server = await preview({ preview: { host: '127.0.0.1', port: 4173, strictPort: true } });
 const browser = await chromium.launch({ channel: 'msedge', headless: true });
 const errors=[];
 try {
  const html=fs.readFileSync('dist/index.html','utf8');
  assert.match(html,/<h1[^>]*>Shoaib Khan/);
  assert.match(html,/experience-independent/);
  assert.match(html,/experience-smart-marine/);
  const schema=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  assert.equal(schema['@graph'].find(x=>x['@type']==='ItemList').itemListElement.length,8);
  for (const item of schema['@graph'].find(x=>x['@type']==='ItemList').itemListElement) {
    assert(fs.existsSync(path.join('dist',decodeURI(new URL(item.item.image).pathname))),'Missing schema image '+item.item.image);
  }
  for (const system of ['light','dark']) {
   const context=await browser.newContext({colorScheme:system,viewport:{width:1440,height:1000}});
   const page=await context.newPage();
   page.on('pageerror',e=>errors.push(e.message));
   page.on('console',m=>{if(m.type()==='error' && /hydration|React|Minified/.test(m.text())) errors.push(m.text());});
   await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle'});
   const toggle=page.getByRole('button',{name:'Switch to dark mode',exact:true});
   assert.equal(await page.locator('html').evaluate(e=>e.classList.contains('dark')),false);
   assert.equal(await toggle.getAttribute('data-system-dark'),system==='dark'?'true':null);
   if (system === 'dark') {
    await page.waitForFunction(() => !document.querySelector('[data-system-dark]'), { }, { timeout: 5000 });
    assert.equal(await page.locator('html').evaluate(e=>e.classList.contains('dark')),false);
   }
   await toggle.click();
   await page.getByRole('button',{name:'Switch to light mode',exact:true}).waitFor();
   assert.equal(await page.locator('html').evaluate(e=>e.classList.contains('dark')),true);
   await page.reload({waitUntil:'networkidle'});
   await page.getByRole('button',{name:'Switch to light mode',exact:true}).waitFor();
   assert.equal(await page.locator('html').evaluate(e=>e.classList.contains('dark')),true);
   await page.getByRole('button',{name:'Switch to light mode',exact:true}).click();
   await page.getByRole('button',{name:'Switch to dark mode',exact:true}).waitFor();
   await page.emulateMedia({colorScheme:system==='dark'?'light':'dark'});
   assert.equal(await page.locator('html').evaluate(e=>e.classList.contains('dark')),false);
   await page.getByRole('button').filter({hasText:'Independent Developer'}).click();
   assert.equal(await page.locator('#experience-independent').isVisible(),true);
   if(system==='dark') {
    fs.mkdirSync('tmp/qa',{recursive:true});
    await page.evaluate(()=>window.scrollTo(0,0));
    await page.screenshot({path:'tmp/qa/desktop.png'});
    await page.setViewportSize({width:390,height:844});
    await page.screenshot({path:'tmp/qa/mobile.png'});
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Mobile overflow');
   }
   await context.close();
  }
  const blocked=await browser.newContext({colorScheme:'dark'});
  await blocked.addInitScript(()=>Object.defineProperty(window,'localStorage',{get(){throw new DOMException('blocked','SecurityError')}}));
  const p=await blocked.newPage();p.on('pageerror',e=>errors.push(e.message));
  await p.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle'});
  await p.getByRole('button',{name:'Switch to dark mode',exact:true}).click();
  await p.getByRole('button',{name:'Switch to light mode',exact:true}).waitFor();
  assert.equal(await p.locator('html').evaluate(e=>e.classList.contains('dark')),true);
  await blocked.close();
  const nojs=await browser.newContext({javaScriptEnabled:false});const staticPage=await nojs.newPage();
  await staticPage.goto('http://127.0.0.1:4173/');
  assert.equal(await staticPage.locator('h1').count(),1);
  assert.equal(await staticPage.locator('#experience-independent').isVisible(),true);
  assert.equal(await staticPage.locator('#experience-smart-marine').isVisible(),true);
  await nojs.close();
  assert.deepEqual(errors,[]);
  console.log('PASS: static content, schema/asset URLs, light/dark systems, saved selections, system changes, mobile overflow, experience selection, blocked storage, no-JS content, no hydration/runtime errors.');
 } finally {await browser.close();await new Promise(resolve=>server.httpServer.close(resolve));}
})().catch(e=>{console.error(e);process.exitCode=1});
