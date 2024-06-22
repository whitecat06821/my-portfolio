import { Typewriter, TypewriterProps } from "react-simple-typewriter";
import { ReactNode } from "react";

interface Iprops {
  name: string | ReactNode;
  paragraph: string;
  TypewriterProps?: TypewriterProps;
  lottie: ReactNode;
  form?: ReactNode;
  btn?: ReactNode;
  socialIcons?: ReactNode;
}

const MainSection = ({
  name,
  paragraph,
  TypewriterProps,
  btn,
  lottie,
  form,
  socialIcons,
}: Iprops) => {
  return (
    <section className="flex flex-col items-center lg:flex-row-reverse">
      {lottie}
      <div className="flex-1">
        {name}
        {TypewriterProps && (
          <p className="font-semibold text-2xl mb-4">
            <Typewriter {...TypewriterProps} />
          </p>
        )}
        <p className="font-light md:text-xl max-w-[620px] text-gray-400 dark:text-zinc-800 tracking-widest mb-4">
          {paragraph}
        </p>
        <div>{form && form}</div>
        {btn && btn}
        {socialIcons && socialIcons}
      </div>
    </section>
  );
};

export default MainSection;
