export type LabeledLink = {
  label: string;
  href: string;
};

export type WriteupSection = {
  heading: string;
  paragraphs: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  context: string;
  tags: string[];
  links: LabeledLink[];
  featured: boolean;
  writeup?: WriteupSection[];
};

export type Playlist = {
  title: string;
  count: string;
  description: string;
  href: string;
};

export const profile = {
  name: "Nickzad Bayati",
  location: "San Jose, California",
  email: "nickzadbayati@gmail.com",
  phone: {
    display: "(415) 636-7600",
    href: "tel:+14156367600",
  },
  discord: {
    username: "srgmanatee",
    displayName: "N-Zad",
  },
  description:
    "Nickzad Bayati is an M.S. Artificial Intelligence student at San José State University and a Cal Poly San Luis Obispo computer science graduate. Before grad school, he interned at Intel and Solidigm.",
  links: {
    linkedin: "https://www.linkedin.com/in/nickzadbayati/",
    github: "https://github.com/n-zad",
    youtube: "https://www.youtube.com/@srgmanatee",
    resume: "/nickzad-bayati-resume.pdf",
  },
};

export type Internship = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
};

export const internships: Internship[] = [
  {
    company: "Solidigm",
    role: "Product Development Engineering Intern",
    period: "Jun 2022–Dec 2022",
    location: "Rancho Cordova",
    summary:
      "I worked on Kitting Center, the internal web app in the SSD firmware release process. That included JavaScript features, Python automation for hardware-configuration exports, and updates to a C firmware simulator so it could test current firmware.",
  },
  {
    company: "Intel",
    role: "Software Developer Intern",
    period: "Jun 2018–Aug 2018",
    location: "Folsom",
    summary: "I maintained and enhanced a web application with C# and ASP.NET MVC on an Agile Scrum team.",
  },
];

export const games = {
  video: ["Clash Royale", "Warframe", "Overwatch", "Realm of the Mad God", "Tabletop Simulator"],
  tabletop: "Root is my favorite strategy board game. I also play older editions of Dungeons & Dragons.",
};

export const projects: Project[] = [
  {
    slug: "belief-persistence",
    title: "Hallucinated Visual Belief Persistence",
    summary:
      "A study of whether vision-language models keep an incorrect read of a driving scene after later frames contradict it.",
    context: "In progress · with Toney Zhen · CMPE 249",
    tags: ["Evaluation", "Vision-language models"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/n-zad/av-vlm-belief-persistence",
      },
    ],
    featured: true,
    writeup: [
      {
        heading: "The question",
        paragraphs: [
          "Vision-language models are being tried for perception in autonomous driving. A wrong interpretation at one moment can still shape later reasoning, even when new images disagree.",
          "Toney Zhen and I are looking at that for CMPE 249, Intelligent Autonomous Systems, in the safety and evaluation track.",
        ],
      },
      {
        heading: "What we are comparing",
        paragraphs: [
          "We use sequential driving images and ask about object presence, attributes, spatial relationships, scene state, and other driving-relevant facts.",
          "The models are Qwen2.5-VL and LLaVA-OneVision. Each one is run with state carried across frames and without it, so we can see whether memory helps the model correct itself or preserves the earlier mistake.",
        ],
      },
      {
        heading: "Where it stands",
        paragraphs: [
          "The repository describes the metrics we plan to report: hallucination persistence, correction latency, the gap between stateful and stateless runs, and safety-action accuracy.",
          "Results are not in yet. I am not treating the planned metrics as findings.",
        ],
      },
    ],
  },
  {
    slug: "deck-organizer",
    title: "Clash Royale Deck Organizer",
    summary:
      "A progressive web app for saving decks, filing them into folders, and turning them into the game's share links.",
    context: "Personal tool · version 1.0.4",
    tags: ["TypeScript", "React"],
    links: [
      {
        label: "Live app",
        href: "https://n-zad.github.io/cr-deck-organizer/",
      },
      {
        label: "Repository",
        href: "https://github.com/n-zad/cr-deck-organizer",
      },
    ],
    featured: true,
    writeup: [
      {
        heading: "Why I made it",
        paragraphs: [
          "I wanted a place to keep Clash Royale decks without creating an account. Decks stay in this browser. A JSON backup can be exported and restored later.",
        ],
      },
      {
        heading: "What it does",
        paragraphs: [
          "You add a deck by picking cards or pasting a Clash Royale share link, then sort decks into folders. The app installs as a PWA and is hosted on GitHub Pages.",
          "I built it with Cursor and AI coding agents. It is an unofficial fan tool. The card art belongs to Supercell.",
        ],
      },
      {
        heading: "Why the card list is baked in",
        paragraphs: [
          "The official Clash Royale API is locked to specific IP addresses, so the browser cannot call it. The app ships a checked-in catalog and portraits. A separate scrape script refreshes that snapshot after a game update.",
          "Routes are hash-based so a refresh on GitHub Pages still lands on the right view.",
        ],
      },
    ],
  },
  {
    slug: "research-repository",
    title: "Research Repository RAG",
    summary:
      "A Streamlit app that answers questions from interview transcripts and shows the passages it used.",
    context: "Personal project",
    tags: ["Python", "Retrieval"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/n-zad/customer-research-rag",
      },
    ],
    featured: true,
    writeup: [
      {
        heading: "Why I made it",
        paragraphs: [
          "A pile of interview notes is hard to search, and a generated summary is hard to trust if you cannot see the lines it came from. I wanted both: an answer, and a way for the app to admit the notes do not support one.",
        ],
      },
      {
        heading: "What it does",
        paragraphs: [
          "It ingests text or markdown transcripts, retrieves chunks with ChromaDB and SentenceTransformers, and asks an OpenAI-compatible model for an answer, key evidence, and follow-up questions. Citations point back at the retrieved text.",
          "Quote Finder skips the model and only returns passages. Theme Extractor summarizes themes from what retrieval already found. Search still works if no API key is set.",
        ],
      },
      {
        heading: "What it does not do yet",
        paragraphs: [
          "The sample interviews are fictional. Chunking is character-based, there is no speaker parsing, and there is no evaluation of whether a citation actually supports the claim.",
          "It runs locally. I have not deployed it.",
        ],
      },
    ],
  },
  {
    slug: "deepfake-detector",
    title: "Deepfake Detector",
    summary:
      "Real-versus-generated image classifiers trained on CIFAKE and DeepDetect-2025. The distilled MaxViT-to-MobileNet model is on my Kaggle account. The ResNet and dual MaxViT checkpoints are on Toney's Hugging Face.",
    context: "Team project · with Advait Shinde and Toney Zhen",
    tags: ["PyTorch", "Gradio"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/adv-11/Deepfake-Classification-DeepLearning",
      },
      {
        label: "Distilled model",
        href: "https://www.kaggle.com/models/srgmanatee/deepfakedetector/",
      },
      {
        label: "Other checkpoints",
        href: "https://huggingface.co/toney02/cmpe258-deepfake-detector-models/tree/main",
      },
    ],
    featured: true,
  },
  {
    slug: "snitch-stitch",
    title: "Snitch-Stitch",
    summary:
      "With Jasper Morgal, Advait Shinde, and Shrivaikunth Krishnakumar. A CLI that scans a repository and an optional running frontend, ranks issues, and can apply reviewed fixes. We won Best Enterprise Application at the Get Funded hackathon.",
    context: "Team hackathon · Best Enterprise Application",
    tags: ["Security", "LLMs"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/adv-11/snitch-stitch",
      },
    ],
    featured: false,
  },
  {
    slug: "senior-project",
    title: "Live music streaming",
    summary:
      "My Cal Poly senior project, a streaming site for artists and bands. The first audio path did not actually serve the stream, so I rewrote it. The public app is offline because the database is turned off.",
    context: "January to June 2023 · solo",
    tags: ["JavaScript", "Audio"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/n-zad/senior-project",
      },
    ],
    featured: false,
  },
  {
    slug: "toxicity-guardrail",
    title: "Output toxicity guardrail",
    summary:
      "My piece of a CMPE 257 guardrails project. I trained and evaluated a toxicity filter on the Jigsaw toxic comment data.",
    context: "With Advait Shinde, Jasper Morgal, and Toney Zhen",
    tags: ["Machine learning"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/adv-11/ml-guardrails-project",
      },
    ],
    featured: false,
  },
  {
    slug: "y-ai",
    title: "Y AI",
    summary:
      "Search and self-play agents for the Game of Y, plus an arena that records win rates and a React view of matches.",
    context: "CMPE 260 · with Jasper Morgal, Advait Shinde, and Toney Zhen",
    tags: ["Reinforcement learning"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Jasper-256/y-ai",
      },
    ],
    featured: false,
  },
  {
    slug: "board-games",
    title: "Board games analysis",
    summary:
      "PCA and linear regression on the top 2,000 BoardGameGeek games, written in R and rendered with Quarto.",
    context: "Personal analysis",
    tags: ["R"],
    links: [
      {
        label: "Read the analysis",
        href: "https://n-zad.github.io/board-games-analysis/",
      },
      {
        label: "Repository",
        href: "https://github.com/n-zad/board-games-analysis",
      },
    ],
    featured: false,
  },
  {
    slug: "xai4traj",
    title: "XAI4Traj",
    summary:
      "A fork of a trajectory-explanation package. I added time to the explanation path, a Social GAN perturbation, and Windows compatibility fixes.",
    context: "Fork of DAIR-Group/XAI4Traj",
    tags: ["Explainability"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/n-zad/XAI4Traj",
      },
    ],
    featured: false,
  },
  {
    slug: "reddit-focus",
    title: "Reddit Focus",
    summary:
      "A Firefox extension that asks a model to highlight, hide, or leave a Reddit post alone as you scroll.",
    context: "Personal tool",
    tags: ["JavaScript"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/n-zad/reddit-focus",
      },
    ],
    featured: false,
  },
  {
    slug: "mltasks",
    title: "Time-series training tasks",
    summary:
      "Four PyTorch forecasting tasks for CMPE 258, from exponential smoothing to an LSTM with prediction intervals, plus a CUDA GEMM benchmark.",
    context: "Coursework extending CoderGym MLtasks",
    tags: ["PyTorch"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/n-zad/mltasks-pytorch-extensions",
      },
    ],
    featured: false,
  },
];

export const playlists: Playlist[] = [
  {
    title: "Main",
    count: "189 videos",
    description: "Includes twenty one pilots, Unroyal, and Teddy Swims.",
    href: "https://www.youtube.com/playlist?list=PLVPKohYfZAxE",
  },
  {
    title: "Oddballs",
    count: "56 videos",
    description:
      "Game music, animatics, and songs that sit outside Main, including Warframe, The Crane Wives, and EPIC: The Musical.",
    href: "https://www.youtube.com/playlist?list=PLXQgAPQdjymA",
  },
  {
    title: "Nerdcore",
    count: "69 videos",
    description: "Game songs, including JT Music and Aviators.",
    href: "https://www.youtube.com/playlist?list=PLJxLcKR6o3xY",
  },
];

export const everythingPlaylist: LabeledLink = {
  label: "All 314 videos",
  href: "https://www.youtube.com/playlist?list=PLWW5G7PHiOr0",
};

export function featuredProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function additionalProjects(): Project[] {
  return projects.filter((project) => !project.featured);
}

export function projectPath(project: Project): string {
  return `/work/${project.slug}`;
}

export function projectLinks(project: Project): LabeledLink[] {
  if (!project.writeup) {
    return project.links;
  }

  return [{ label: "Read more", href: projectPath(project) }, ...project.links];
}

export function linkAttrs(href: string): { target?: "_blank"; rel?: string } {
  const opensInNewTab = href.startsWith("https://") || href.startsWith("http://") || href.endsWith(".pdf");
  if (opensInNewTab) {
    return { target: "_blank", rel: "noreferrer" };
  }
  return {};
}
