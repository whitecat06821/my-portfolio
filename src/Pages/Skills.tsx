import { SKILLS, TOOLS } from "../components/data";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { Iskills } from "../components/interfaces";

const Skills = () => {
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof skillCategories>("Frontend");
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  // Group skills into categories
  const skillCategories = {
    Frontend: SKILLS.filter((skill) =>
      [
        "Html",
        "Css",
        "Bootstrap",
        "Tailwind Css",
        "react",
        "redux",
        "Type Script",
      ].includes(skill.children)
    ),
    Backend: SKILLS.filter((skill) =>
      ["ASP.NET", "Node.js", "Python", "C#"].includes(skill.children)
    ),
    Database: SKILLS.filter((skill) =>
      ["PostgreSQL", "MySQL", "MongoDB"].includes(skill.children)
    ),
    "AI/ML": SKILLS.filter((skill) =>
      [
        "OpenAI",
        "Pinecone",
        "Langchain",
        "Chatbot",
        "Zapier",
        "Make.com",
      ].includes(skill.children)
    ),
    "Development Tools": SKILLS.filter((skill) =>
      [
        "Git",
        "npm",
        "Vercel",
        "Github",
        "Axios",
        "Lottie",
        "React Icons",
      ].includes(skill.children)
    ),
  } as const;

  const getAnimationClass = (category: keyof typeof skillCategories) => {
    if (!isAnimating) return "";

    switch (category) {
      case "Frontend":
        return direction === "next"
          ? "opacity-0 scale-95 rotate-3"
          : "opacity-0 scale-95 -rotate-3";
      case "Backend":
        return direction === "next"
          ? "opacity-0 translate-y-full"
          : "opacity-0 -translate-y-full";
      case "Database":
        return direction === "next"
          ? "opacity-0 translate-x-full"
          : "opacity-0 -translate-x-full";
      case "AI/ML":
        return direction === "next"
          ? "opacity-0 scale-50"
          : "opacity-0 scale-150";
      case "Development Tools":
        return direction === "next"
          ? "opacity-0 -translate-x-full rotate-12"
          : "opacity-0 translate-x-full -rotate-12";
      default:
        return "";
    }
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("prev");
    const categories = Object.keys(skillCategories) as Array<
      keyof typeof skillCategories
    >;
    const currentIndex = categories.indexOf(activeCategory);
    const prevIndex =
      (currentIndex - 1 + categories.length) % categories.length;
    setActiveCategory(categories[prevIndex]);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("next");
    const categories = Object.keys(skillCategories) as Array<
      keyof typeof skillCategories
    >;
    const currentIndex = categories.indexOf(activeCategory);
    const nextIndex = (currentIndex + 1) % categories.length;
    setActiveCategory(categories[nextIndex]);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeCategory, isAnimating]);

  return (
    <div className="py-8">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Skills</title>
      </Helmet>

      <div className="flex flex-col">
        <div className="mb-8">
          <h3 className="font-extrabold text-2xl md:text-3xl lg:text-4xl mb-6">
            Skills
          </h3>
          <p className="font-light md:text-xl max-w-[620px] text-gray-400 dark:text-zinc-800 tracking-widest mb-4">
            I use these skills in most of my projects.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                title="Previous category"
                aria-label="Previous category"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <h4 className="text-2xl font-semibold">{activeCategory}</h4>
              <button
                onClick={handleNext}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                title="Next category"
                aria-label="Next category"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="overflow-hidden">
              <div
                className={`flex flex-wrap gap-4 justify-center transition-all duration-500 ease-in-out ${getAnimationClass(
                  activeCategory
                )}`}
              >
                {skillCategories[activeCategory].map((skill: Iskills) => (
                  <div key={skill.alt} className="flex flex-wrap">
                    <div className="flex flex-col justify-center items-center w-32 h-32 bg-transparent border hover:border-transparent rounded duration-500 hover:bg-white hover:text-zinc-800 dark:hover:text-white border-zinc-800 dark:hover:bg-zinc-800 dark:border-zinc-800 hover:scale-105">
                      <img
                        src={skill.src}
                        className="w-20 h-20 p-2 rounded-md"
                        alt={skill.alt}
                      />
                      <p className="font-light tracking-wide">
                        {skill.children}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-bold text-4xl inline-block mb-4">Tools</h3>
          <p className="font-light md:text-xl max-w-[620px] text-gray-400 dark:text-zinc-800 tracking-widest mb-4">
            I use these tools in most of my projects.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {TOOLS.map((tool) => (
              <div key={tool.alt} className="flex flex-wrap">
                <div className="flex flex-col justify-center items-center w-32 h-32 bg-transparent border hover:border-transparent rounded duration-500 hover:bg-white hover:text-zinc-800 dark:hover:text-white border-zinc-800 dark:hover:bg-zinc-800 dark:border-zinc-800 hover:scale-105">
                  <img
                    src={tool.src}
                    className="w-20 h-20 p-2 rounded-md"
                    alt={tool.alt}
                  />
                  <p className="font-light tracking-wide">{tool.children}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
