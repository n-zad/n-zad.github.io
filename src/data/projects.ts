import type { LabeledLink } from "./site";

type Month = "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12";
export type YearMonth = `${number}-${Month}`;

export type ProjectKind = "Course project" | "Side project" | "Hackathon";
export type ProjectTeam = "Solo" | "Team";

export type ProjectTimeline =
  | { status: "current"; start?: YearMonth }
  | { status: "past"; start?: YearMonth; end?: YearMonth };

export type DetailSection = {
  heading: string;
  paragraphs: string[];
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectDetails = {
  sections: DetailSection[];
  reflection?: string[];
  images?: ProjectImage[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  timeline: ProjectTimeline;
  kind?: ProjectKind;
  team?: ProjectTeam;
  course?: string;
  collaborators?: string[];
  note?: string;
  tags: string[];
  links: LabeledLink[];
  details?: ProjectDetails;
};

export const projects: Project[] = [
  {
    slug: "belief-persistence",
    title: "Hallucinated Visual Belief Persistence",
    summary:
      "A study of whether vision-language models keep an incorrect read of a driving scene after later frames contradict it.",
    timeline: { status: "current", start: "2026-09" },
    kind: "Course project",
    team: "Team",
    course: "CMPE 249",
    collaborators: ["Toney Zhen"],
    tags: ["Evaluation", "Vision-language models"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/n-zad/av-vlm-belief-persistence",
      },
    ],
    details: {
      sections: [
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
  },
  {
    slug: "deck-organizer",
    title: "Clash Royale Deck Organizer",
    summary:
      "A progressive web app for saving decks, filing them into folders, and turning them into the game's share links.",
    timeline: { status: "current" },
    kind: "Side project",
    team: "Solo",
    note: "Version 1.0.4",
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
    details: {
      sections: [
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
  },
  {
    slug: "research-repository",
    title: "Research Repository RAG",
    summary:
      "A Streamlit app that answers questions from interview transcripts and shows the passages it used.",
    timeline: { status: "past", start: "2026-06", end: "2026-06" },
    kind: "Side project",
    team: "Solo",
    tags: ["Python", "Retrieval"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/n-zad/customer-research-rag",
      },
    ],
    details: {
      sections: [
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
  },
  {
    slug: "deepfake-detector",
    title: "Deepfake Detector",
    summary:
      "Real-versus-generated image classifiers trained on CIFAKE and DeepDetect-2025. The distilled MaxViT-to-MobileNet model is on my Kaggle account. The ResNet and dual MaxViT checkpoints are on Toney's Hugging Face.",
    timeline: { status: "past", start: "2026-04", end: "2026-05" },
    kind: "Course project",
    team: "Team",
    course: "CMPE 258",
    collaborators: ["Advait Shinde", "Toney Zhen"],
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
  },
  {
    slug: "reddit-focus",
    title: "Reddit Focus",
    summary:
      "A Firefox extension that asks a model to highlight, hide, or leave a Reddit post alone as you scroll.",
    timeline: { status: "past", start: "2026-03", end: "2026-03" },
    kind: "Hackathon",
    note: "NVIDIA Agents for Impact Hackathon",
    tags: ["JavaScript"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/n-zad/reddit-focus",
      },
    ],
  },
  {
    slug: "snitch-stitch",
    title: "Snitch-Stitch",
    summary:
      "A CLI that scans a repository and an optional running frontend, ranks issues, and can apply reviewed fixes. We won Best Enterprise Application at the Get Funded hackathon.",
    timeline: { status: "past", start: "2026-01", end: "2026-01" },
    kind: "Hackathon",
    team: "Team",
    collaborators: ["Jasper Morgal", "Advait Shinde", "Shrivaikunth Krishnakumar"],
    note: "Best Enterprise Application",
    tags: ["Security", "LLMs"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/adv-11/snitch-stitch",
      },
    ],
  },
  {
    slug: "xai4traj",
    title: "XAI4Traj",
    summary:
      "A fork of a trajectory-explanation package. I added time to the explanation path, a Social GAN perturbation, and Windows compatibility fixes.",
    timeline: { status: "past", start: "2025-10", end: "2025-12" },
    note: "Fork of DAIR-Group/XAI4Traj",
    tags: ["Explainability"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/n-zad/XAI4Traj",
      },
    ],
  },
  {
    slug: "toxicity-guardrail",
    title: "Output toxicity guardrail",
    summary:
      "My piece of a CMPE 257 guardrails project. I trained and evaluated a toxicity filter on the Jigsaw toxic comment data.",
    timeline: { status: "past", start: "2025-09", end: "2025-12" },
    kind: "Course project",
    team: "Team",
    course: "CMPE 257",
    collaborators: ["Advait Shinde", "Jasper Morgal", "Toney Zhen"],
    tags: ["Machine learning"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/adv-11/ml-guardrails-project",
      },
    ],
  },
  {
    slug: "senior-project",
    title: "Live music streaming",
    summary:
      "My Cal Poly senior project, a streaming site for artists and bands. The first audio path did not actually serve the stream, so I rewrote it. The public app is offline because the database is turned off.",
    timeline: { status: "past", start: "2023-01", end: "2023-06" },
    kind: "Course project",
    team: "Solo",
    course: "Senior project",
    tags: ["JavaScript", "Audio"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/n-zad/senior-project",
      },
    ],
  },
  {
    slug: "y-ai",
    title: "Y AI",
    summary:
      "Search and self-play agents for the Game of Y, plus an arena that records win rates and a React view of matches.",
    timeline: { status: "past" },
    kind: "Course project",
    team: "Team",
    course: "CMPE 260",
    collaborators: ["Jasper Morgal", "Advait Shinde", "Toney Zhen"],
    tags: ["Reinforcement learning"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Jasper-256/y-ai",
      },
    ],
  },
  {
    slug: "mltasks",
    title: "Time-series training tasks",
    summary:
      "Four PyTorch forecasting tasks, from exponential smoothing to an LSTM with prediction intervals, plus a CUDA GEMM benchmark.",
    timeline: { status: "past" },
    kind: "Course project",
    course: "CMPE 258",
    note: "Extends CoderGym MLtasks",
    tags: ["PyTorch"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/n-zad/mltasks-pytorch-extensions",
      },
    ],
  },
  {
    slug: "board-games",
    title: "Board games analysis",
    summary:
      "PCA and linear regression on the top 2,000 BoardGameGeek games, written in R and rendered with Quarto.",
    timeline: { status: "past" },
    kind: "Side project",
    team: "Solo",
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
  },
  {
    slug: "blogging-platform",
    title: "Blogging platform",
    summary:
      "A four-person blogging platform at Cal Poly. I led the backend work, including the service and data layers, tests, and GitHub Actions.",
    timeline: { status: "past" },
    kind: "Course project",
    team: "Team",
    course: "Software Engineering I and II",
    tags: ["Backend", "CI"],
    links: [],
  },
];

const monthFormat = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
const listFormat = new Intl.ListFormat("en", { type: "conjunction" });

function formatMonth(month: YearMonth): string {
  const [year, monthNumber] = month.split("-").map(Number);
  return monthFormat.format(new Date(Date.UTC(year, monthNumber - 1)));
}

export function formatTimeline(timeline: ProjectTimeline): string | undefined {
  if (timeline.status === "current") {
    return timeline.start ? `${formatMonth(timeline.start)} – present` : "Ongoing";
  }

  const { start, end } = timeline;
  if (start && end && start !== end) {
    return `${formatMonth(start)} – ${formatMonth(end)}`;
  }
  const onlyMonth = end ?? start;
  return onlyMonth && formatMonth(onlyMonth);
}

function mostRecentMonth(timeline: ProjectTimeline): YearMonth | undefined {
  return timeline.status === "past" ? (timeline.end ?? timeline.start) : timeline.start;
}

/** Newest first; projects without dates keep their listed order at the end. */
function byMostRecent(a: Project, b: Project): number {
  const aMonth = mostRecentMonth(a.timeline);
  const bMonth = mostRecentMonth(b.timeline);
  if (aMonth === bMonth) {
    return 0;
  }
  if (!aMonth) {
    return 1;
  }
  if (!bMonth) {
    return -1;
  }
  return bMonth.localeCompare(aMonth);
}

export function currentProjects(): Project[] {
  return projects.filter((project) => project.timeline.status === "current").sort(byMostRecent);
}

export function pastProjects(): Project[] {
  return projects.filter((project) => project.timeline.status === "past").sort(byMostRecent);
}

export function projectMetaParts(project: Project): string[] {
  const collaborators = project.collaborators && `with ${listFormat.format(project.collaborators)}`;
  return [formatTimeline(project.timeline), project.course, collaborators, project.note].filter(
    (part): part is string => Boolean(part),
  );
}

export function projectLabels(project: Project): string[] {
  return [project.kind, project.team].filter((label): label is ProjectKind | ProjectTeam => Boolean(label));
}

export function projectSearchText(project: Project): string {
  return [project.title, project.summary, ...projectMetaParts(project), ...projectLabels(project), ...project.tags]
    .join(" ")
    .toLowerCase();
}

export function projectDialogId(project: Project): string {
  return `project-details-${project.slug}`;
}
