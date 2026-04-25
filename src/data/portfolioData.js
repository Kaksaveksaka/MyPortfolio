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
import chefPreviewVideo from "../../Assets/PreviewVideo/Chef tycon/portrait.mp4";
import firecrackerPreviewVideo from "../../Assets/PreviewVideo/Firecracker Simulator AR/playstore-preview.mp4";
import fruityPreviewVideo from "../../Assets/PreviewVideo/Fruity Fiesta/portrait.mp4";
import sudokuPreviewVideo from "../../Assets/PreviewVideo/Sudoku/portrait.mp4";
import smartMarineModuleClipA from "../../Assets/internVRProject/com.oculus.xrstreamingclient-20220730-145548 - Trim.mp4";
import smartMarineModuleClipAAlt from "../../Assets/internVRProject/com.oculus.xrstreamingclient-20220730-145548 - rim.mp4";
import smartMarineModuleClipB from "../../Assets/internVRProject/com.oculus.xrstreamingclient-20220730-125051 - Trim.mp4";
import smartMarineOverviewVideo from "../../Assets/internVRProject/movie_039.mp4";

const buildGameUrl = (slug, gameId) => `https://www.gamezop.com/en/game/${slug}/${gameId}`;

const rolloutPreviewVideo = "https://static.gamezop.com/HkRMTzJDck7/portrait.mp4";

export const featuredProjects = [
  {
    id: "chef-tycoon",
    title: "Chef Tycoon",
    kicker: "Real-time restaurant economy",
    description:
      "Built Gamezop's largest 3D web game in Cocos3D with live economy balancing, synced player data, and monetization hooks.",
    summary:
      "Chef Tycoon combines Cocos3D gameplay, WebSocket and XHR-backed balancing, and account-linked progression so item prices, properties, and inventory stay synced in real time.",
    standoutMetric: "Gamezop Flagship Title",
    poster: chefPoster,
    previewVideo: chefPreviewVideo,
    gameUrl: buildGameUrl("chef-tycoon", "xqO4nZ6Kt"),
    embedMode: "external-launch",
    stack: ["Cocos3D", "WebSocket", "XHR APIs", "Rewarded Ads"],
    impact: [
      "Real-time economy powered by WebSocket event streams.",
      "Login-backed sync keeps prices, properties, and inventory consistent online.",
      "Reduced startup load time by 40% through smarter asset staging.",
      "Integrated rewarded and midroll ad flows through the Gamezop SDK.",
    ],
  },
  {
    id: "sudoku-classic",
    title: "Sudoku Classic",
    kicker: "Algorithmic puzzle PWA",
    description:
      "Built a Phaser 3 puzzle experience with backtracking-based board generation, responsive layouts, and an offline-first PWA shell.",
    summary:
      "Sudoku Classic is tuned for low-friction play with deterministic puzzle generation, portrait and landscape support, and automatic PWA updates when players come back online.",
    standoutMetric: "Offline-first PWA",
    poster: sudokuPoster,
    previewVideo: sudokuPreviewVideo,
    gameUrl: buildGameUrl("sudoku-classic", "SJgx126Qc0H"),
    embedMode: "external-launch",
    storeUrl: "https://play.google.com/store/apps/details?id=com.gamezop.sudoku",
    stack: ["Phaser 3", "PWA", "Backtracking", "Responsive UI"],
    impact: [
      "Gameplay logic built on a backtracking algorithm for robust puzzle validation.",
      "Fully responsive in both portrait and landscape orientations.",
      "Offline-first architecture with cached assets and auto update flow.",
      "Fast resume behavior that protects player state across sessions.",
    ],
  },
  {
    id: "rollout",
    title: "Rollout",
    kicker: "High-ranking arcade runner",
    description:
      "Led the full development of Rollout in Cocos3D and pushed it into the top 10 most-played games in a portfolio of 300+ titles.",
    summary:
      "Rollout demonstrates end-to-end ownership: gameplay construction, tuning, and iteration tight enough to break into the platform's top tier of engagement.",
    standoutMetric: "Top 10 of 300+ titles",
    poster: rolloutPoster,
    previewVideo: rolloutPreviewVideo,
    gameUrl: buildGameUrl("rollout", "HkRMTzJDck7"),
    embedMode: "external-launch",
    stack: ["Cocos3D", "Gameplay Tuning", "LiveOps", "Performance"],
    impact: [
      "Reached top-10 placement across a catalogue of 300+ games.",
      "Owned the project from implementation through tuning and release.",
      "Improved replayability with tighter difficulty and pacing curves.",
      "Focused on fast scene transitions and low-friction restarts.",
    ],
  },
  {
    id: "fruity-fiesta",
    title: "Fruity Fiesta",
    kicker: "Scaled casual game engagement",
    description:
      "Connected UI systems and gameplay loops for a mass-market casual title that served more than 400K monthly active users.",
    summary:
      "Fruity Fiesta is about polish and throughput: smoother handoff between menus and gameplay, cleaner feedback states, and reliable retention-oriented UX.",
    standoutMetric: "one of the top grossing titles",
    poster: fruityPoster,
    previewVideo: fruityPreviewVideo,
    gameUrl: buildGameUrl("fruity-fiesta", "mKZZW9NXW"),
    embedMode: "external-launch",
    stack: ["Phaser 3", "UI Systems", "Monetization", "Analytics"],
    impact: [
      "Supported a live audience of more than 400K monthly active users.",
      "Improved UI and gameplay integration for cleaner player flows.",
      "Aligned retention signals with monetization surfaces.",
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
    stack: ["Unity", "VR Training", "hand tracking"],
    impact: [
      "Contributed multiple small VR modules and their scene setup during an early internship ramp-up.",
      "Used Unity and Quest-based XR workflows without prior production VR experience going in.",
      "Captured one overview demo plus short module clips to document the work completed in the internship window.",
      "Experience added practical grounding in XR interaction flows and headset-oriented scene organization.",
    ],
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