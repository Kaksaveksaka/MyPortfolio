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
    id: "chef-tycoon",
    title: "Chef Tycoon",
    kicker: "Flagship 3D Restaurant Simulation",
    description:
      "Owned Gamezop's flagship 3D simulation game end-to-end: customer AI systems, live operations, gameplay systems, progression, economy balancing, and monetization.",
    summary:
      "Chef Tycoon represents complete engineering ownership of Gamezop's flagship 3D simulation title. Features intelligent customer AI behaviors, real-time WebSocket and REST dynamic balancing, and analytics-driven live operations that boosted average playtime by 56% and reduced churn by 25%.",
    standoutMetric: "6.1M+ Plays",
    poster: chefPoster,
    previewVideo: chefPreviewVideo,
    gameUrl: buildGameUrl("chef-tycoon", "xqO4nZ6Kt"),
    embedMode: "external-launch",
    businessUrl: "https://business.gamezop.com/html5-games/Chef-Tycoon/xqO4nZ6Kt",
    stack: ["Cocos3D", "Customer AI", "Live Ops", "WebSocket", "Economy Balancing"],
    impact: [
      "Owned Chef Tycoon end-to-end as Gamezop's flagship 3D simulation title reaching 6.1M+ verified plays.",
      "Engineered intelligent customer AI systems, kitchen progression queues, and real-time economy balancing.",
      "Implemented analytics-driven live ops and gameplay balancing, increasing average playtime by 56% and reducing churn by 25%.",
      "Developed real-time systems using WebSocket and REST APIs for live updates, synchronization, and dynamic balancing.",
      "Reduced startup load time by 40% through modular asset staging and texture compression.",
    ],
  },
  {
    id: "fruity-fiesta",
    title: "Fruity Fiesta",
    kicker: "1.2B+ Plays Casual Phenomenon",
    description:
      "Top-performing casual title improved through reskinning, optimization, and analytics-driven improvements, reaching 1.2B+ verified plays.",
    summary:
      "Fruity Fiesta is tuned for hyper-scalable mass engagement: frictionless handoffs between menus and game scenes, juicy feedback states, and high-retention casual loops driving over 1.2 billion gameplays across partner ecosystems.",
    standoutMetric: "1.2B+ Plays",
    poster: fruityPoster,
    previewVideo: fruityPreviewVideo,
    gameUrl: buildGameUrl("fruity-fiesta", "mKZZW9NXW"),
    embedMode: "external-launch",
    businessUrl: "https://business.gamezop.com/html5-games/Fruity-Fiesta/mKZZW9NXW",
    stack: ["Phaser 3", "Reskinning", "Monetization", "Analytics", "Optimization"],
    impact: [
      "Top-performing Gamezop title improved through reskinning, optimization, and analytics-driven improvements reaching 1.2B+ plays.",
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
      "Production 3D arcade runner ranked top 10 among 300+ titles, reaching 114M+ plays with tight obstacle curve tuning.",
    summary:
      "Rollout demonstrates complete engineering ownership: 3D gameplay construction in Cocos3D, obstacle curve tuning, responsive steering, and performance profiling tight enough to capture over 114 million gameplays.",
    standoutMetric: "114M+ Plays",
    poster: rolloutPoster,
    previewVideo: rolloutPreviewVideo,
    gameUrl: buildGameUrl("rollout", "HkRMTzJDck7"),
    embedMode: "external-launch",
    businessUrl: "https://business.gamezop.com/html5-games/Rollout/HkRMTzJDck7",
    stack: ["Cocos3D", "Gameplay Tuning", "Obstacle Tuning", "60 FPS Profiling"],
    impact: [
      "Ranked top 10 among 300+ titles in Gamezop's ecosystem, reaching 114M+ verified plays.",
      "Owned the project from concept to 3D gameplay mechanics, obstacle curve tuning, and release.",
      "Engineered responsive touch/keyboard steering with low-friction instant restarts.",
      "Delivered lightweight 60 FPS performance across desktop and mobile browsers.",
    ],
  },
  {
    id: "sudoku-classic",
    title: "Sudoku Classic",
    kicker: "9M+ Plays Algorithmic PWA",
    description:
      "Algorithm-driven PWA with heuristic/backtracking puzzle generation, responsive UI, offline support, and caching.",
    summary:
      "Sudoku Classic is engineered for low-friction brain training with deterministic heuristic/backtracking puzzle generation, dual-orientation responsive canvas, and seamless PWA service worker caching with Google Play release.",
    standoutMetric: "9M+ Plays",
    poster: sudokuPoster,
    previewVideo: sudokuPreviewVideo,
    gameUrl: buildGameUrl("sudoku-classic", "SJgx126Qc0H"),
    embedMode: "external-launch",
    storeUrl: "https://play.google.com/store/apps/details?id=com.gamezop.sudoku",
    businessUrl: "https://business.gamezop.com/html5-games/Sudoku-Classic/SJgx126Qc0H",
    stack: ["Phaser 3", "Backtracking Algorithm", "PWA Caching", "Responsive UI"],
    impact: [
      "Scaled to 9M+ verified plays across web, PWA, and Google Play Store.",
      "Engineered heuristic/backtracking puzzle generation algorithm for instant board creation.",
      "Fully responsive in portrait and landscape orientations with offline service worker asset caching.",
      "Fast resume lifecycle protecting user board state across interruptions.",
    ],
  },
  {
    id: "knife-slice-3d",
    title: "Knife Slice 3D",
    kicker: "Multi-Platform Unity Release & Tooling",
    description:
      "Independent Unity game released on Android and 6 distribution platforms with custom Unity Editor SDK bridge tooling, AdMob, IAP, and localization.",
    summary:
      "Developed and published Knife Slice 3D using Unity and C#, distributed across Google Play, Huawei AppGallery, Oppo, Yandex, Playgama, and CrazyGames. Built custom Unity Editor tooling for one-click platform switching and 3D level object scattering.",
    standoutMetric: "on 6 platforms",
    poster: knifeSliceIcon,
    previewImages: [
      knifeSlicePreview1,
      knifeSlicePreview2,
      knifeSlicePreview3,
      knifeSlicePreview4,
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.silverhook.knifeSlice3D",
    embedMode: "store-only",
    stack: ["Unity", "C#", "Custom Editor Tooling", "Android", "AdMob & IAP", "Localization"],
    impact: [
      "Developed and published using Unity & C#, distributed across Google Play, Huawei AppGallery, Oppo, Yandex, Playgama, and CrazyGames.",
      "Built a modular Unity Editor SDK bridge tool enabling one-click switching between distribution platforms by automating manifest updates and package reconfiguration.",
      "Created Unity Editor tooling to scatter, replace, and instantiate interactable game objects from 3D models for faster level-building workflows.",
      "Integrated AdMob monetization, in-app purchases (IAP), and multi-language localization.",
      "Optimized 60 FPS mobile rendering and tactile cutting physics across a wide spectrum of Android devices.",
    ],
  },
  {
    id: "firecracker-simulator-ar",
    title: "Firecracker Simulator AR",
    kicker: "Independent AR Simulation",
    description:
      "Independent AR simulation featuring interactive controls, phone-as-lighter mechanics, visual effects, AdMob, IAP, and localization.",
    summary:
      "Firecracker Simulator AR is a personal safety-first AR concept: real-world interaction, multiple spawning modes, and multi-language onboarding packaged into a focused mobile simulation with 5.0 Google Play rating.",
    standoutMetric: "5.0 Play rating",
    poster: firecrackerPoster,
    previewVideo: firecrackerPreviewVideo,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.KaKsProductions.FirecrackerSimulatorAR",
    embedMode: "store-only",
    stack: ["Unity", "ARCore", "Visual Effects", "AdMob & IAP", "Localization"],
    impact: [
      "Published on Google Play with a 5.0 rating at the time of capture.",
      "Interactive controls using the phone as a lighter for tactile AR interaction.",
      "Integrated visual particle effects, sound feedback, AdMob monetization, IAP, and localization.",
      "Multilingual tutorial support and multiple firecracker spawn modes.",
    ],
  },
  {
    id: "blocks-tower-ar",
    title: "Blocks Tower AR",
    kicker: "Independent 3D AR Stacking Game",
    description:
      "Independent 3D AR stacking game with physics interactions, local multiplayer, and 30K+ downloads on Google Play.",
    summary:
      "Blocks Tower AR is a personal Unity-based mobile release focused on tactile tower balance, physics interactions, local multiplayer, and optional AR mode for a physical tabletop experience.",
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
    stack: ["Unity", "ARCore", "Physics Interactions", "Local Multiplayer"],
    impact: [
      "Achieved 30K+ downloads on Google Play with offline support.",
      "Engineered realistic block physics, collapse simulation, and touch balancing.",
      "Supports AR mode, local multiplayer pass-and-play, and portrait or landscape orientation.",
      "Built for offline play with detailed 3D lighting and realtime shadows.",
    ],
  },
  {
    id: "smart-marine-vr-modules",
    title: "Smart Marine VR Modules",
    kicker: "VR Training Simulation",
    description:
      "Unity-based VR training simulations for Oculus Quest featuring interactive PID controller, pressure understanding, and fire safety training modules.",
    summary:
      "Developed Unity-based VR training simulations for Oculus Quest during internship at Smart Marine. Created interactive PID controller, pressure understanding, and fire safety training modules with headset-optimized scene organization.",
    standoutMetric: "Oculus Quest VR",
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
    stack: ["Unity", "C#", "Oculus Quest", "PID Controller", "VR Safety"],
    impact: [
      "Developed Unity-based VR training simulations for Oculus Quest.",
      "Created interactive PID controller, pressure understanding, and fire safety training modules.",
      "Gained hands-on mastery in XR interaction flows, tactile VR feedback, and headset-oriented scene organization.",
    ],
  },
];

export const gamezopReferences = [
  {
    id: "chef-tycoon-ref",
    title: "Chef Tycoon",
    category: "Strategy",
    verifiedPlays: "6.1M plays",
    publisher: "Gamezop Business",
    highlight: "Flagship 3D restaurant tycoon with customer AI, real-time WebSocket economy, and +56% playtime boost.",
    businessUrl: "https://business.gamezop.com/html5-games/Chef-Tycoon/xqO4nZ6Kt",
    gameUrl: "https://www.gamezop.com/en/game/chef-tycoon/xqO4nZ6Kt",
    embedSnippet:
      '<iframe seamless="seamless" allowtransparency="true" allowfullscreen="true" frameborder="0" style="width: 100%;height: 100%;border: 0px;" src="https://zv1y2i8p.play.gamezop.com/g/xqO4nZ6Kt"></iframe>',
  },
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
];

export const professionalExperience = [
  {
    id: "gamezop",
    role: "Game Developer",
    company: "Gamezop",
    period: "2022 - Present",
    type: "Full-Time",
    badge: "Core Engineering",
    summary:
      "Built and shipped production games end-to-end, supporting an ecosystem of 300+ games reaching 45M+ monthly users.",
    highlights: [
      "Built and shipped production games end-to-end covering gameplay systems, UI, progression, monetization, optimization, and release workflows.",
      "Supported Gamezop's ecosystem of 300+ games reaching 45M+ monthly users.",
      "Owned Chef Tycoon, Gamezop's flagship 3D simulation game, including customer AI systems, gameplay systems, progression, economy balancing, monetization, and live operations.",
      "Implemented analytics-driven live ops actions and gameplay balancing based on player behavior data, increasing average playtime by 56% and reducing churn by 25%.",
      "Developed real-time systems using WebSocket and REST APIs for live updates, synchronization, and dynamic balancing.",
      "Architected service-worker cache control and rollout workflows supporting 200+ games.",
      "Developed Android AdTech mediation SDK integrating AdMob with Gamezop's advertising platform.",
      "Published SDK packages through GitHub and Maven Central and created partner integration documentation.",
      "Resolved 500+ bugs across 60+ production games and mentored 5 junior developers.",
    ],
    metrics: [
      { label: "Monthly Users", value: "45M+" },
      { label: "Avg Playtime Boost", value: "+56%" },
      { label: "Churn Reduction", value: "-25%" },
      { label: "Bugs Resolved", value: "500+" },
    ],
    stack: [
      "Unity",
      "Cocos Creator",
      "Phaser",
      "C#",
      "TypeScript",
      "WebSocket",
      "Service Workers",
      "Android SDK",
      "Maven Central",
    ],
  },
  {
    id: "independent",
    role: "Independent Developer",
    company: "Side Projects",
    period: "2021 - Present",
    type: "Indie / Commercial",
    badge: "Tools & Multi-Platform",
    summary:
      "Designed, developed, and published independent mobile, web, and AR games, and built automated AI content production pipelines from concept to release.",
    highlights: [
      "Architected an AI-Assisted Content Automation Pipeline: designed an end-to-end automated video production workflow automating content sourcing, editing workflows, voice generation, subtitles, metadata generation, and publishing.",
      "Used AI-assisted development for scripting, debugging, testing, and rapid iteration to turn complex media operations into an autonomous, scalable engine.",
      "Developed and published Knife Slice 3D using Unity and C#, released on Android and multiple distribution platforms including Huawei AppGallery, Oppo, Yandex, Playgama, and CrazyGames.",
      "Built a modular Unity Editor SDK bridge tool enabling one-click switching between distribution platforms by automating manifest updates and package reconfiguration.",
      "Created Unity Editor tooling to scatter, replace, and instantiate interactable game objects from 3D models for faster level-building workflows.",
      "Integrated AdMob monetization, in-app purchases, and localization into Knife Slice 3D and Firecracker Simulator AR.",
      "Built additional AR/mobile experiences including Blocks Tower and Firecracker Simulator AR.",
    ],
    metrics: [
      { label: "Stores Distributed", value: "6 Platforms" },
      { label: "AI Video Pipeline", value: "End-to-End" },
      { label: "Play Rating", value: "5.0 ★" },
      { label: "Downloads", value: "30K+" },
    ],
    stack: [
      "Unity",
      "C#",
      "AI Automation Pipeline",
      "AI-Assisted Dev",
      "Custom Editor Tools",
      "Android",
      "ARCore",
      "AdMob Mediation",
      "IAP",
      "Localization",
    ],
  },
  {
    id: "smart-marine",
    role: "VR Developer Intern",
    company: "Smart Marine",
    period: "2022",
    type: "Internship",
    badge: "XR Simulation",
    summary:
      "Developed Unity-based VR training simulations for Oculus Quest focused on physics modules and safety protocols.",
    highlights: [
      "Developed Unity-based VR training simulations for Oculus Quest.",
      "Created interactive PID controller, pressure understanding, and fire safety training modules.",
      "Engineered tactile hand interactions and headset-optimized scene architectures.",
    ],
    metrics: [
      { label: "Target Device", value: "Oculus Quest" },
      { label: "Modules Shipped", value: "PID, Pressure, Safety" },
    ],
    stack: ["Unity", "C#", "Oculus Quest", "XR Interaction", "Physics Simulation"],
  },
];

export const technicalSkillsCategories = [
  {
    category: "Game Engines",
    icon: "🎮",
    description: "Production experience across 3D, 2D, and web game engines.",
    skills: ["Unity", "Cocos Creator", "Phaser", "CreateJS", "Construct 2 & 3"],
  },
  {
    category: "Programming",
    icon: "💻",
    description: "Object-oriented, asynchronous, and reactive languages for systems.",
    skills: ["C#", "TypeScript", "JavaScript"],
  },
  {
    category: "Unity Development",
    icon: "⚡",
    description: "Deep engine scripting, physics, profiling, and memory management.",
    skills: [
      "Gameplay Programming",
      "Editor Scripting",
      "Physics Systems",
      "Performance Profiling",
      "Memory Optimization",
    ],
  },
  {
    category: "Game Systems",
    icon: "📊",
    description: "Player retention loops, economy balancing, live ops, and monetization.",
    skills: [
      "Live Ops",
      "Analytics",
      "Retention Optimization",
      "Economy Balancing",
      "Progression Systems",
      "Monetization Systems",
    ],
  },
  {
    category: "Tooling & Build Systems",
    icon: "🛠️",
    description: "Automation tools, AI systems, and custom editor extensions.",
    skills: [
      "AI Systems",
      "AI-Assisted Development",
      "Content Automation Pipelines",
      "Custom Unity Editor Tools",
      "Build Pipelines",
      "Multi-SDK Platform Automation",
    ],
  },
  {
    category: "Platform & Backend",
    icon: "🌐",
    description: "Real-time state sync, network protocols, and offline web architecture.",
    skills: [
      "WebSocket",
      "REST APIs",
      "Service Workers",
      "PWA",
      "Real-Time Synchronization",
    ],
  },
  {
    category: "Mobile & SDK",
    icon: "📱",
    description: "Native libraries, mediation adapters, publishing, and payments.",
    skills: [
      "Android SDK",
      "AAR Libraries",
      "AdMob Mediation",
      "IAP",
      "Localization",
      "Maven Central Publishing",
    ],
  },
  {
    category: "Tools & Workflow",
    icon: "⚙️",
    description: "Continuous integration, source control, and agile team delivery.",
    skills: ["Git", "GitHub Actions", "Maven", "Jira", "Agile Development"],
  },
];

export const technicalHighlights = [
  {
    title: "AI & Content Automation Pipeline",
    tools: "Video Automation, Neural Voice, Subtitles, Metadata, LLMs",
    description:
      "Designed an end-to-end automated video production workflow: automated content sourcing, programmatic editing, neural voice generation, subtitles, metadata generation, and publishing. Used AI-assisted development for rapid scripting, testing, and iteration.",
  },
  {
    title: "Unity Custom Editor Tooling",
    tools: "Editor Scripting, Multi-SDK Automation, Object Scatter",
    description:
      "Engineered custom Unity Editor tools including a modular SDK bridge tool for one-click distribution switching and 3D level object scattering/instantiation tools for faster level-building.",
  },
  {
    title: "Flagship 3D Chef Tycoon",
    tools: "Customer AI, Economy Balancing, LiveOps, WebSocket",
    description:
      "Owned Gamezop's flagship 3D simulation game: customer AI behaviors, real-time WebSocket state, and analytics-driven live ops that boosted playtime by 56% and reduced churn by 25%.",
  },
  {
    title: "Android AdTech Mediation SDK",
    tools: "Android SDK, AAR Libraries, AdMob, Maven Central",
    description:
      "Developed Android mediation SDK integrating AdMob with Gamezop's ad platform; published packages to Maven Central and GitHub with partner integration documentation.",
  },
  {
    title: "Reusable Service Workers & PWA",
    tools: "Service Workers, Cache Control, Rollout Workflows",
    description:
      "Architected service-worker cache control and rollout workflows supporting 200+ games, enabling offline gameplay, seamless cold boots, and deterministic updates.",
  },
  {
    title: "Real-Time WebSocket State",
    tools: "WebSocket, REST APIs, Live Balancing, Dynamic Sync",
    description:
      "Developed real-time systems using WebSocket and REST APIs for live updates, economy synchronization, and dynamic gameplay balancing across concurrent sessions.",
  },
  {
    title: "Multi-Platform Publishing",
    tools: "Google Play, Huawei, Oppo, Yandex, Playgama, CrazyGames",
    description:
      "Distributed games across 6 global platforms with automated manifest reconfiguration, in-app purchases (IAP), AdMob mediation, and multi-language localization.",
  },
  {
    title: "Scale Optimization & Mentorship",
    tools: "Profiling, Texture Compression, Code Mentorship",
    description:
      "Resolved 500+ bugs across 60+ production games, slashed cold start times by 40% with asset staging, and mentored 5 junior developers in production practices.",
  },
  {
    title: "XR Simulation & Training",
    tools: "Oculus Quest, ARCore, PID Controllers, Hand Tracking",
    description:
      "Developed Unity-based VR simulations for Oculus Quest (PID controller, pressure understanding, fire safety) and interactive AR mobile titles with 30K+ downloads.",
  },
];

export const educationAndCredentials = {
  education: {
    degree: "B.Tech in Computer Science and Engineering (CSE)",
    institution: "Delhi Technical Campus",
    period: "2018 - 2022",
    details: "Foundational coursework in computer science, algorithms, 3D computer graphics, and software engineering.",
  },
  certifications: [
    {
      title: "Software Engineering Virtual Experience Program",
      organization: "Electronic Arts (Forage)",
      date: "Sep 2021",
      tag: "Game Engineering",
    },
    {
      title: "Introduction to Machine Learning",
      organization: "Duke University",
      date: "Apr 2021",
      tag: "AI Systems",
    },
    {
      title: "Learn C# and Make a Video Game in Unity",
      organization: "Udemy",
      date: "Jan 2021",
      tag: "Unity 3D & C#",
    },
    {
      title: "Neural Networks and Deep Learning",
      organization: "Coursera",
      date: "Jun 2021",
      tag: "Deep Learning",
    },
  ],
  languages: [
    { language: "English", proficiency: "Professional Working / Fluent" },
    { language: "Hindi", proficiency: "Native / Bilingual" },
    { language: "Arabic", proficiency: "Elementary" },
  ],
};

export const contactLinks = [
  {
    label: "Email",
    value: "Shoaib.mahab@live.com",
    href: "mailto:Shoaib.mahab@live.com",
  },
  {
    label: "Phone",
    value: "+91-9599711928",
    href: "tel:+919599711928",
  },
  {
    label: "LinkedIn",
    value: "shoaib-khan-here",
    href: "https://www.linkedin.com/in/shoaib-khan-here/",
  },
];