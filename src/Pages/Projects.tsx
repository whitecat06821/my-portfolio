import Tabs from "../components/ui/Tabs";
import { Helmet } from "react-helmet";

interface Iprops {}

const Projects = ({}: Iprops) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Project</title>
      </Helmet>
      <h3 className="font-extrabold text-2xl md:text-3xl lg:text-4xl mb-6">
        My Projects
      </h3>
      <p className="font-light md:text-xl max-w-[620px] text-gray-400 mb-6 dark:text-zinc-800 tracking-widest">
        Many of them are open-source, so if you see something that piques your
        interest, check out the code and contribute if you have ideas on how it
        can be improved.
      </p>
      <Tabs />
    </div>
  );
};

export default Projects;
