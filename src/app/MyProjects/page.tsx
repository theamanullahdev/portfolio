import Image from "next/image";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import Tag from "@/components/Tag";
import Frame from "@/components/Frame";
import LivePreview from "@/components/LivePreview";
import { RouteMarker } from "@/components/Route";

type ProjectButton = {
  link: string;
  text: string;
  color: "brass" | "verdigris" | "rubric";
  external: boolean;
};

type Project = {
  id: string;
  title: string;
  description: string;
  preview?: string;
  picture: string;
  techs: string[];
  comingSoon?: boolean;
  buttons: ProjectButton[];
};

const PROJECTS: Project[] = [
  {
    id: "chain-presence",
    title: "ChainPresence AI",
    description:
      "On-chain attendance system — check in via a wallet transaction to a Solidity contract on Sepolia, then Gemini reads the on-chain log and writes a plain-English trend summary. Built at a hackathon.",
    preview: "https://chain-presence-next-gamma.vercel.app",
    picture: "/piclogo.png",
    techs: ["Solidity", "Next.js", "Gemini AI"],
    buttons: [
      { link: "/projectpgs/chain-presence", text: "Details", color: "brass", external: false },
      { link: "https://github.com/theamanullahdev/ChainPresence", text: "GitHub", color: "verdigris", external: true },
      { link: "https://chain-presence-next-gamma.vercel.app", text: "Live Demo", color: "rubric", external: true },
    ],
  },
  {
    id: "clauselens",
    title: "ClauseLens",
    description:
      "Contract review that thinks like a lawyer — upload an original and revised contract and get every change risk-scored (critical / moderate / minor) and explained in plain English, powered by Claude.",
    preview: "https://clauselensapp.vercel.app",
    picture: "/piclogo.png",
    techs: ["Next.js", "Claude AI", "shadcn/ui"],
    buttons: [
      { link: "/projectpgs/clauselens", text: "Details", color: "brass", external: false },
      { link: "https://github.com/theamanullahdev/ClauseLens", text: "GitHub", color: "verdigris", external: true },
      { link: "https://clauselensapp.vercel.app", text: "Live Demo", color: "rubric", external: true },
    ],
  },
  {
    id: "digital-marketing-trade",
    title: "Digital Marketing Trade",
    description:
      "Multi-service digital agency platform delivering Web3, ecommerce, and marketing solutions — technical infrastructure, core web platform, and client systems, live at enterprise scale.",
    preview: "https://alhijaz.agency",
    picture: "/alhijaz.png",
    techs: ["Full-Stack", "Next.js", "Architecture"],
    buttons: [
      { link: "/projectpgs/digital-marketing-trade", text: "Details", color: "brass", external: false },
      { link: "https://alhijaz.agency", text: "Live Platform", color: "verdigris", external: true },
    ],
  },
  {
    id: "lettersmith",
    title: "LetterSmith",
    description:
      "AI-powered cover letter generator — CV, job description, and prompt in, a polished letter out. Next.js, REST APIs, real-time processing.",
    preview: "https://lettersmithai.vercel.app",
    picture: "/LTsmith1.png",
    techs: ["Next.js", "React", "AI"],
    buttons: [
      { link: "/projectpgs/lettersmith", text: "Details", color: "brass", external: false },
      { link: "https://github.com/theamanullahdev/lettersmith", text: "GitHub", color: "verdigris", external: true },
      { link: "https://lettersmithai.vercel.app/", text: "Live Demo", color: "rubric", external: true },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "This site — responsive design, a rebuilt Almanac design system, and attention to the small details of frontend craft.",
    preview: "https://www.amanullahdev.com/PreviewCard",
    picture: "/portfolio.png",
    techs: ["Next.js", "React", "Design"],
    buttons: [
      { link: "/projectpgs/portfolio", text: "Details", color: "brass", external: false },
      { link: "https://github.com/theamanullahdev/portfolio", text: "GitHub", color: "verdigris", external: true },
      { link: "https://amanullahdev.com", text: "Live Site", color: "rubric", external: true },
    ],
  },
  {
    id: "wine-locker",
    title: "Wine-Locker",
    description:
      "Linux security utility using shell scripts to lock Wine executables — temporary unlock timers, toggleable access control, multi-user workflows.",
    picture: "/winlock.png",
    techs: ["Bash", "Linux", "Security"],
    buttons: [
      { link: "/projectpgs/wine-locker", text: "Details", color: "brass", external: false },
      { link: "https://github.com/theamanullahdev/wine-locker", text: "GitHub", color: "verdigris", external: true },
    ],
  },
  {
    id: "ahatasham-work",
    title: "Ahatasham Work Portfolio",
    description:
      "Professional portfolio for a Shopify/ecommerce agency owner — case studies and conversion-optimized design built for lead generation.",
    preview: "https://ahtashamwork.com",
    picture: "/ahatasham-preview.png",
    techs: ["Shopify", "Ecommerce", "Marketing"],
    buttons: [
      { link: "/projectpgs/AhtashamWorkPortfolio", text: "Details", color: "brass", external: false },
      { link: "https://ahtashamwork.com", text: "Visit Portfolio", color: "rubric", external: true },
    ],
  },
  {
    id: "on-chain-chat",
    title: "On-Chain Chat App",
    description:
      "Decentralized chat built on Injective using CosmWasm — fully on-chain profiles, messaging, and identity management.",
    picture: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Solana_logo.png",
    techs: ["CosmWasm", "Next.js", "Blockchain"],
    comingSoon: true,
    buttons: [{ link: "/ComingSoon", text: "Coming Soon", color: "rubric", external: false }],
  },
  {
    id: "nft-launchpad",
    title: "NFT Launchpad",
    description:
      "NFT collection launch platform — minting dashboards, whitelist management, and Solana/Ethereum SDK integration.",
    picture: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg",
    techs: ["Solidity", "Next.js", "Web3.js"],
    comingSoon: true,
    buttons: [{ link: "/ComingSoon", text: "Coming Soon", color: "rubric", external: false }],
  },
];

const PLATE_SHADOW =
  "shadow-[inset_0_1px_0_rgba(230,196,110,0.1),inset_0_-1px_0_rgba(0,0,0,0.4),inset_0_0_0_4px_rgba(13,11,8,0.95),inset_0_0_0_6px_rgba(230,196,110,0.55),0_4px_10px_rgba(0,0,0,0.35)]";

function ProjectMedia({ project }: { project: Project }) {
  if (project.preview) {
    return <LivePreview src={project.preview} title={project.title} />;
  }
  if (project.picture.startsWith("/")) {
    return (
      <Image
        src={project.picture}
        alt={project.title}
        fill
        sizes="(max-width: 767px) 100vw, 448px"
        className="object-cover"
      />
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={project.picture} alt={project.title} className="object-contain w-full h-full p-8 opacity-70" />;
}

export default function MyProjects() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 pt-16 sm:pt-20 pb-20">
      <div className="text-center mb-14 sm:mb-16">
        <span className="font-technical text-2xs text-brass tracking-widest">§ INDEX — PROJECTS</span>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-paper mt-3">My Projects</h1>
        <p className="font-reading text-paper-dim max-w-xl mx-auto mt-4">
          From security to AI &amp; blockchain — a taste of what I&apos;ve been building.
        </p>
      </div>

      {PROJECTS.map((project, idx) => {
        const num = String(idx + 1).padStart(2, "0");
        return (
          <section
            key={project.id}
            className="relative lg:grid lg:grid-cols-[2rem_1fr] lg:gap-6 py-10 sm:py-12 border-b border-brass/20 last:border-b-0"
          >
            <RouteMarker number={num} final={idx === PROJECTS.length - 1} />
            <div
              className={`flex flex-col ${
                idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-6 sm:gap-8`}
            >
              {/* Ornamental frame sits on this outer plaque; the media itself
                  (especially live, scrollable iframes) is inset in its own
                  "mat" so the linework surrounds the card instead of
                  overlaying the live content inside it. */}
              <div
                className={`group plaque plaque-fill relative w-full max-w-md h-52 sm:h-64 shrink-0 border p-2.5 sm:p-3 ${
                  project.comingSoon ? "border-rubric/30" : "border-brass/30"
                } ${PLATE_SHADOW}`}
              >
                <Frame className="text-brass/40 group-hover:text-brass/80 transition-colors duration-300" />
                <div className="relative w-full h-full overflow-hidden bg-ink-2">
                  <ProjectMedia project={project} />
                </div>
              </div>

              <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
                <Heading number={num} text={project.title} color={project.comingSoon ? "rubric" : "brass"} as="h2" />
                <p className="font-reading text-sm sm:text-base text-paper-dim mt-4 mb-4 max-w-md">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-1.5 mb-5">
                  {project.techs.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {project.buttons.map((btn) => (
                    <Button key={btn.text} href={btn.link} color={btn.color} external={btn.external}>
                      {btn.text}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <div className="text-center pt-14 sm:pt-16">
        <h2 className="font-display text-2xl sm:text-3xl text-paper mb-3">More Cooking Soon…</h2>
        <p className="font-reading text-paper-dim max-w-xl mx-auto mb-6">
          Some ideas are still in progress. Check back later or follow along on GitHub.
        </p>
        <Button href="https://github.com/theamanullahdev" color="brass" external>
          Visit My GitHub
        </Button>
      </div>
    </div>
  );
}
