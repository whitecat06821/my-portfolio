import Lottie from "lottie-react";
import homeAnimation from "../assets/Animation - 1714866948612-CQ3er.json";
import MainSection from "../components/MainSection";
import { PARAGRAPH_ABOUT } from "../components/data";
import Button from "../components/ui/Button";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
      </Helmet>
      <MainSection
        name={
          <div className="font-extrabold text-5xl md:text-7xl lg:text-8xl mb-4 mt-12">
            <span>
              Little Bit
              <br />
              About Me
            </span>
          </div>
        }
        paragraph={PARAGRAPH_ABOUT}
        btn={
          <Button width="w-fit">
            <NavLink to={"/contactme"}>Contact Me</NavLink>
          </Button>
        }
        lottie={
          <div className="flex-1 mb-3 dark:bg-none dark:bg-green-300 bg-gradient-to-br from-gray-50 via-gray-200 to-gray-300 lg:-mt-40 rounded-b-xl">
            <Lottie
              className={"text-lg animate-transY"}
              animationData={homeAnimation}
            />
          </div>
        }
      />
    </>
  );
};

export default About;
