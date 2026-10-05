export type LabeledLink = {
  label: string;
  href: string;
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

export function linkAttrs(href: string): { target?: "_blank"; rel?: string } {
  const opensInNewTab = href.startsWith("https://") || href.startsWith("http://") || href.endsWith(".pdf");
  if (opensInNewTab) {
    return { target: "_blank", rel: "noreferrer" };
  }
  return {};
}
