import { SKILLS, TOOLS } from "../components/data";
import { Helmet } from "react-helmet";

const Skills = () => {
  return (
    <div className="py-1">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Skills</title>
      </Helmet>
      <h3 className="font-bold text-4xl inline-block">Skills</h3>
      <p className="font-normal md:text-lg max-w-[750px] text-gray-400 dark:text-zinc-800 tracking-wide mb-4">
        I use this Skills in most of my projects.
      </p>
      <div className="flex flex-wrap gap-4 mb-4">
        {SKILLS.map((skill) => (
          <div className="flex flex-wrap">
            <div className="flex flex-col justify-center items-center w-32 h-32 bg-transparent border hover:border-transparent rounded duration-500 hover:bg-white hover:text-zinc-800 dark:hover:text-white border-zinc-800 dark:hover:bg-zinc-800 dark:border-zinc-800 hover:scale-105">
              <img
                src={skill.src}
                className="w-20 h-20 p-2 rounded-md"
                alt={skill.alt}
              />
              <p className="font-light tracking-wide">{skill.children}</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className=" font-bold text-4xl inline-block">Tools</h3>
      <p className="font-normal md:text-lg max-w-[750px] text-gray-400 dark:text-zinc-800 tracking-wide mb-4">
        I use this tool in most of my projects.
      </p>
      <div className="flex flex-wrap gap-4">
        {TOOLS.map((tool) => (
          <div className="flex flex-wrap">
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
  );
};

export default Skills;
