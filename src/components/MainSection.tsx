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
    <section className="flex flex-col mt-6 lg:flex-row-reverse">
      <div className="flex-1 mb-4 lg:mb-0">{lottie}</div>
      <div className="flex-1">
        <div className="mb-4">
          {typeof name === "string" ? (
            <h1 className="font-extrabold text-5xl md:text-7xl lg:text-8xl">
              {name}
            </h1>
          ) : (
            name
          )}
        </div>
        {TypewriterProps && (
          <p className="font-semibold text-2xl mb-4">
            <Typewriter {...TypewriterProps} />
          </p>
        )}
        <p className="font-light md:text-xl max-w-[620px] text-gray-400 dark:text-zinc-800 tracking-widest mb-4">
          {paragraph}
        </p>
        {form && <div>{form}</div>}
        {btn && <div>{btn}</div>}
        {socialIcons && <div>{socialIcons}</div>}
      </div>
    </section>
  );
};

export default MainSection;
