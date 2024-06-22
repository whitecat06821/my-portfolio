import { ReactNode } from "react";
import { ButtonHTMLAttributes } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width: "w-full" | "w-fit";
}

const Button = ({ children, className, width = "w-full", ...rest }: Iprops) => {
  return (
    <button
      className={`${className} ${width} text-md bg-transparent font-semibold py-2 px-4 border hover:border-transparent rounded duration-500 hover:bg-white text-white hover:text-zinc-800 border-zinc-400 dark:hover:bg-zinc-800 dark:text-zinc-800 dark:hover:text-white dark:border-zinc-800`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
