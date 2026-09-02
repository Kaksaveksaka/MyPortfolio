import chefPoster from "../../Assets/PreviewImage/Chef tycon/450x800 (1).png";
import blocksTowerPoster from "../../Assets/PreviewImage/Blocks Tower AR/image.png";
import blocksTowerPreview1 from "../../Assets/PreviewImage/Blocks Tower AR/unnamed.jpg";
import blocksTowerPreview2 from "../../Assets/PreviewImage/Blocks Tower AR/unnamed (1).jpg";
import blocksTowerPreview3 from "../../Assets/PreviewImage/Blocks Tower AR/unnamed (2).jpg";
import blocksTowerPreview4 from "../../Assets/PreviewImage/Blocks Tower AR/playstore-screenshot-1.webp";
import firecrackerPoster from "../../Assets/PreviewImage/Firecracker Simulator AR/playstore-screenshot-1.webp";
import fruityPoster from "../../Assets/PreviewImage/Fruity Fiesta/450x800.png";
import rolloutPoster from "../../Assets/PreviewImage/Rollout/450x800.png";
import sudokuPoster from "../../Assets/PreviewImage/Sudoku/450x800.png";
import knifeSliceIcon from "../../Assets/PreviewImage/Knife Slice 3D/icon.png";
import knifeSlicePreview1 from "../../Assets/PreviewImage/Knife Slice 3D/screenshot-1.webp";
import knifeSlicePreview2 from "../../Assets/PreviewImage/Knife Slice 3D/screenshot-2.webp";
import knifeSlicePreview3 from "../../Assets/PreviewImage/Knife Slice 3D/screenshot-3.webp";
import knifeSlicePreview4 from "../../Assets/PreviewImage/Knife Slice 3D/screenshot-4.webp";
import chefPreviewVideo from "../../Assets/PreviewVideo/Chef tycon/portrait.mp4";
import firecrackerPreviewVideo from "../../Assets/PreviewVideo/Firecracker Simulator AR/playstore-preview.mp4";
import fruityPreviewVideo from "../../Assets/PreviewVideo/Fruity Fiesta/portrait.mp4";
import sudokuPreviewVideo from "../../Assets/PreviewVideo/Sudoku/portrait.mp4";
import smartMarineModuleClipA from "../../Assets/internVRProject/com.oculus.xrstreamingclient-20220730-145548 - Trim.mp4";
import smartMarineModuleClipAAlt from "../../Assets/internVRProject/com.oculus.xrstreamingclient-20220730-145548 - rim.mp4";
import smartMarineModuleClipB from "../../Assets/internVRProject/com.oculus.xrstreamingclient-20220730-125051 - Trim.mp4";
import smartMarineOverviewVideo from "../../Assets/internVRProject/movie_039.mp4";
import smartMarinePoster from "../../Assets/internVRProject/poster.jpg";

const buildGameUrl = (slug, gameId) => `https://www.gamezop.com/en/game/${slug}/${gameId}`;

const rolloutPreviewVideo = "https://static.gamezop.com/HkRMTzJDck7/portrait.mp4";

export const featuredProjects = [
  {
    id: "fruity-fiesta",
    title: "Fruity Fiesta",
    kicker: "1.2B+ Plays Casual Phenomenon",
    description:
      "Connected UI systems, retention loops, and monetization flows for Gamezop's mega-hit casual title with over 1.2 Billion verified plays.",
    summary:
      "Fruity Fiesta is tuned for hyper-scalable mass engagement: frictionless handoffs between menus and game scenes, juicy feedback states, and high-retention casual loops driving over 1.2 billion gameplays across partner ecosystems.",
    standoutMetric: "1.2B+ Plays",
    poster: fruityPoster,
    previewVideo: fruityPreviewVideo,
    gameUrl: buildGameUrl("fruity-fiesta", "mKZZW9NXW"),
    embedMode: "external-launch",
    businessUrl: "https://business.gamezop.com/html5-games/Fruity-Fiesta/mKZZW9NXW",
    stack: ["Phaser 3", "UI Systems", "Monetization", "Analytics"],
    impact: [
      "Supported a live audience reaching over 1.2 Billion total verified plays.",
      "Optimized UI and gameplay integration for ultra-smooth player retention loops.",
      "Balanced retention signals with high-performing monetization placements.",
      "Maintained rock-solid performance across hundreds of distribution partner embeds.",
    ],
  },
  {
    id: "rollout",
    title: "Rollout",
    kicker: "114M+ Plays High-Speed Runner",
    description:
      "Led end-to-end development of Rollout in Cocos3D, scaling it to 114M+ plays and securing top 10 placement across a catalogue of 300+ titles.",
    summary:
      "Rollout demonstrates complete engineering ownership: 3D gameplay construction, obstacle curve tuning, and performance profiling tight enough to capture over 114 million gameplays.",
    standoutMetric: "114M+ Plays",
    poster: rolloutPoster,
    previewVideo: rolloutPreviewVideo,
    gameUrl: buildGameUrl("rollout", "HkRMTzJDck7"),
    embedMode: "external-launch",
    businessUrl: "https://business.gamezop.com/html5-games/Rollout/HkRMTzJDck7",
    stack: ["Cocos3D", "Gameplay Tuning", "LiveOps", "Performance"],
    impact: [
      "Achieved 114M+ verified plays and top-10 ranking in Gamezop's 300+ game catalog.",
      "Owned the project from concept to 3D gameplay mechanics, tuning, and release.",
      "Engineered responsive touch/keyboard steering with low-friction instant restarts.",
      "Delivered lightweight 60 FPS performance across desktop and mobile browsers.",
    ],
  },
  {
    id: "knife-slice-3d",
    title: "Knife Slice 3D",
    kicker: "Google Play 3D Mobile Release",
    description:
      "Designed and published an arcade 3D knife flipping and slicing game on Google Play with realistic physics, tactile blade cutting, and progressive levels.",
    summary:
      "Knife Slice 3D is a mobile release focused on tactile arcade satisfaction: responsive knife-flipping physics, dynamic obstacle cutting, layered particle bursts, and progressive obstacle challenges tuned for instant hyper-casual play.",
    standoutMetric: "Google Play",
    poster: knifeSliceIcon,
    previewImages: [
      knifeSlicePreview1,
      knifeSlicePreview2,
      knifeSlicePreview3,
      knifeSlicePreview4,
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.silverhook.knifeSlice3D",
    embedMode: "store-only",
    stack: ["Unity", "3D Physics", "Android", "Particle FX"],
    impact: [
      "Published to Google Play with realistic knife rotation physics and touch controls.",
      "Engineered dynamic cutting feedback, juicy particle effects, and screen shake.",
      "Designed multi-stage obstacle tracks and blade progression loops.",
      "Optimized 60 FPS mobile rendering across a wide spectrum of Android devices.",
    ],
  },
  {
    id: "sudoku-classic",
    title: "Sudoku Classic",
    kicker: "9M+ Plays Algorithmic PWA",
    description:
      "Built a Phaser 3 puzzle experience with backtracking-based board generation, responsive layouts, and an offline-first PWA shell with 9M+ plays.",
    summary:
      "Sudoku Classic is engineered for low-friction brain training with deterministic puzzle generation, dual-orientation responsive canvas, and seamless PWA caching with Google Play release.",
    standoutMetric: "9M+ Plays",
    poster: sudokuPoster,
    previewVideo: sudokuPreviewVideo,
    gameUrl: buildGameUrl("sudoku-classic", "SJgx126Qc0H"),
    embedMode: "external-launch",
    storeUrl: "https://play.google.com/store/apps/details?id=com.gamezop.sudoku",
    businessUrl: "https://business.gamezop.com/html5-games/Sudoku-Classic/SJgx126Qc0H",
    stack: ["Phaser 3", "PWA", "Backtracking", "Responsive UI"],
    impact: [
      "Scaled to 9M+ verified plays across web, PWA, and Google Play Store.",
      "Gameplay logic built on an optimized backtracking algorithm for instant puzzle generation.",
      "Fully responsive in portrait and landscape orientations with offline asset caching.",
      "Fast resume lifecycle protecting user board state across interruptions.",
    ],
  },
  {
    id: "chef-tycoon",
    title: "Chef Tycoon",
    kicker: "6.1M+ Plays Real-time Economy",
    description:
      "Built Gamezop's largest 3D web game in Cocos3D with live economy balancing, account sync, and monetization hooks reaching 6.1M+ plays.",
    summary:
      "Chef Tycoon combines Cocos3D gameplay, WebSocket and XHR-backed balancing, and account-linked progression so item prices, properties, and inventory stay synced in real time.",
    standoutMetric: "6.1M+ Plays",
    poster: chefPoster,
    previewVideo: chefPreviewVideo,
    gameUrl: buildGameUrl("chef-tycoon", "xqO4nZ6Kt"),
    embedMode: "external-launch",
    businessUrl: "https://business.gamezop.com/html5-games/Chef-Tycoon/xqO4nZ6Kt",
    stack: ["Cocos3D", "WebSocket", "XHR APIs", "Rewarded Ads"],
    impact: [
      "Generated 6.1M+ verified plays as Gamezop's flagship 3D simulation title.",
      "Real-time economy powered by WebSocket event streams and secure backend validation.",
      "Reduced startup load time by 40% through modular asset staging and texture compression.",
      "Integrated rewarded and midroll ad flows directly through the Gamezop SDK.",
    ],
  },
  {
    id: "blocks-tower-ar",
    title: "Blocks Tower AR : Mobile Jenga",
    kicker: "Personal AR mobile release",
    description:
      "Designed and published an ad-free AR Jenga-style mobile game with local multiplayer, offline support, and portrait or landscape play.",
    summary:
      "Blocks Tower AR is a personal Unity-based mobile release focused on tactile tower balance, polished 3D presentation, and optional AR play for a more physical-feeling tabletop experience.",
    standoutMetric: "30K+ downloads",
    poster: blocksTowerPoster,
    previewImages: [
      blocksTowerPreview1,
      blocksTowerPreview2,
      blocksTowerPreview3,
      blocksTowerPreview4,
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.KaksProduction.BlockstowerARVR",
    embedMode: "store-only",
    stack: ["Unity", "ARCore", "Mobile", "Offline"],
    impact: [
      "Published to Google Play as an ad-free mobile release.",
      "Supports AR mode, local multiplayer, and portrait or landscape orientation.",
      "Built for offline play with detailed 3D lighting and realtime shadows.",
    ],
  },
  {
    id: "firecracker-simulator-ar",
    title: "Firecracker Simulator AR",
    kicker: "Personal AR simulation release",
    description:
      "Built an AR firecracker simulator that replaces physical crackers with interactive spawning, lighter-style controls, and layered audiovisual feedback.",
    summary:
      "Firecracker Simulator AR is a personal safety-first AR concept: real-world interaction, multiple spawning modes, and multi-language onboarding packaged into a focused mobile simulation.",
    standoutMetric: "5.0 Play rating",
    poster: firecrackerPoster,
    previewVideo: firecrackerPreviewVideo,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.KaKsProductions.FirecrackerSimulatorAR",
    embedMode: "store-only",
    stack: ["Unity", "AR", "Localization", "Monetization"],
    impact: [
      "Published on Google Play with a 5.0 rating at the time of capture.",
      "Includes multilingual tutorial support and multiple firecracker spawn modes.",
      "Uses the phone as a lighter for a more tactile AR interaction loop.",
    ],
  },
  {
    id: "smart-marine-vr-modules",
    title: "Smart Marine VR Modules",
    kicker: "Early internship XR work",
    description:
      "Built a small set of Unity VR training modules during a 3-month Smart Marine internship while ramping into XR workflows for the first time.",
    summary:
      "This internship work focused on scene setup and a few focused Oculus Quest training modules rather than a large standalone product. The overall clip shows the combined VR environment, while shorter captures cover brief module interactions completed during the internship.",
    standoutMetric: "Internship",
    poster: smartMarinePoster,
    previewVideo: smartMarineOverviewVideo,
    embedMode: "internal-demo",
    supportingVideos: [
      {
        title: "Module clip A",
        note: "Brief trim from one internship module.",
        src: smartMarineModuleClipA,
      },
      {
        title: "Module clip A alternate",
        note: "A second brief trim of the same module.",
        src: smartMarineModuleClipAAlt,
      },
      {
        title: "Module clip B",
        note: "Short capture from another module built during the internship.",
        src: smartMarineModuleClipB,
      },
    ],
    stack: ["Unity", "VR Training", "Hand Tracking"],
    impact: [
      "Contributed multiple small VR modules and their scene setup during an early internship ramp-up.",
      "Used Unity and Quest-based XR workflows without prior production VR experience going in.",
      "Captured one overview demo plus short module clips to document the work completed in the internship window.",
      "Experience added practical grounding in XR interaction flows and headset-oriented scene organization.",
    ],
  },
];

export const gamezopReferences = [
  {
    id: "fruity-fiesta-ref",
    title: "Fruity Fiesta",
    category: "Arcade",
    verifiedPlays: "1.2B plays",
    publisher: "Gamezop Business",
    highlight: "Mass-market casual fruit merge game distributed globally across thousands of publisher networks.",
    businessUrl: "https://business.gamezop.com/html5-games/Fruity-Fiesta/mKZZW9NXW",
    gameUrl: "https://www.gamezop.com/en/game/fruity-fiesta/mKZZW9NXW",
    embedSnippet:
      '<iframe seamless="seamless" allowtransparency="true" allowfullscreen="true" frameborder="0" style="width: 100%;height: 100%;border: 0px;" src="https://zv1y2i8p.play.gamezop.com/g/mKZZW9NXW"></iframe>',
  },
  {
    id: "rollout-ref",
    title: "Rollout",
    category: "Adventure",
    verifiedPlays: "114M plays",
    publisher: "Gamezop Business",
    highlight: "3D arcade runner ranked in top 10 most played titles across Gamezop's 300+ title catalogue.",
    businessUrl: "https://business.gamezop.com/html5-games/Rollout/HkRMTzJDck7",
    gameUrl: "https://www.gamezop.com/en/game/rollout/HkRMTzJDck7",
    embedSnippet:
      '<iframe seamless="seamless" allowtransparency="true" allowfullscreen="true" frameborder="0" style="width: 100%;height: 100%;border: 0px;" src="https://zv1y2i8p.play.gamezop.com/g/HkRMTzJDck7"></iframe>',
  },
  {
    id: "sudoku-classic-ref",
    title: "Sudoku Classic",
    category: "Puzzle & Logic",
    verifiedPlays: "9M plays",
    publisher: "Gamezop & Google Play",
    highlight: "Algorithmic backtracking puzzle engine with offline PWA architecture and Play Store release.",
    businessUrl: "https://business.gamezop.com/html5-games/Sudoku-Classic/SJgx126Qc0H",
    gameUrl: "https://www.gamezop.com/en/game/sudoku-classic/SJgx126Qc0H",
    storeUrl: "https://play.google.com/store/apps/details?id=com.gamezop.sudoku",
    embedSnippet:
      '<iframe seamless="seamless" allowtransparency="true" allowfullscreen="true" frameborder="0" style="width: 100%;height: 100%;border: 0px;" src="https://zv1y2i8p.play.gamezop.com/g/SJgx126Qc0H"></iframe>',
  },
  {
    id: "chef-tycoon-ref",
    title: "Chef Tycoon",
    category: "Strategy",
    verifiedPlays: "6.1M plays",
    publisher: "Gamezop Business",
    highlight: "Flagship 3D restaurant tycoon with real-time WebSocket economy and rewarded ad monetization.",
    businessUrl: "https://business.gamezop.com/html5-games/Chef-Tycoon/xqO4nZ6Kt",
    gameUrl: "https://www.gamezop.com/en/game/chef-tycoon/xqO4nZ6Kt",
    embedSnippet:
      '<iframe seamless="seamless" allowtransparency="true" allowfullscreen="true" frameborder="0" style="width: 100%;height: 100%;border: 0px;" src="https://zv1y2i8p.play.gamezop.com/g/xqO4nZ6Kt"></iframe>',
  },
];

export const technicalHighlights = [
  {
    title: "Real-time systems",
    tools: "WebSocket, event pipelines, shared state",
    description:
      "Used WebSockets and APIs to maintain near real-time synchronization of game state across multiple systems, enabling responsive gameplay, consistent economy updates, and seamless player-side interactions.",
  },
  {
    title: "PWA offline architecture",
    tools: "Service worker, cache strategy, update flow",
    description:
      "Shipped offline-capable browser games with safe updates, quick cold starts, and resilient local progress.",
  },
  {
    title: "Reusable service workers",
    tools: "Integration logic, cache orchestration, game-agnostic rollout",
    description:
      "Designed service worker integration and cache logic that can be reused across different games by swapping each title into the same workflow rather than rebuilding offline support from scratch.",
  },
  {
    title: "Partner collaboration",
    tools: "Custom Integrations & Partner Solutions",
    description:
      "Led end-to-end integration support for partners by designing tailored game solutions, resolving technical challenges, and driving successful launches through close cross-team collaboration.",
  },
  {
    title: "Mediation adapter leadership",
    tools: "Adapter design, Maven, GitHub, partner onboarding",
    description:
      "Led the design and rollout of a mediation adapter, coordinated with multiple partners for integration, and published the package to GitHub and Maven Central.",
  },
  {
    title: "CI/CD delivery",
    tools: "GitHub Actions, Maven, preview deploys",
    description:
      "Automated build validation and release workflows to keep browser and mobile game iterations predictable.",
  },
  {
    title: "Performance optimization",
    tools: "Asset staging, bundle trimming, profiling",
    description:
      "Optimized startup time, runtime responsiveness, and perceived smoothness across constrained devices.",
  },
  {
    title: "Cross-engine execution",
    tools: "Unity, Cocos Creator, Phaser, CreateJS, Construct",
    description:
      "Shipped and supported games across multiple engines, including reskins, bug fixing, and production support at scale.",
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: "Shoaib.arshi@yahoo.com",
    href: "mailto:Shoaib.arshi@yahoo.com",
  },
  {
    label: "Phone",
    value: "+91 95997 11928",
    href: "tel:+919599711928",
  },
  {
    label: "LinkedIn",
    value: "shoaib-khan-here",
    href: "https://www.linkedin.com/in/shoaib-khan-here/",
  },
];