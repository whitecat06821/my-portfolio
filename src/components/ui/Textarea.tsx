import { TextareaHTMLAttributes } from "react";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = ({ ...rest }: IProps) => {
  return (
    <textarea
      className="border-[1px] border-gray-300 shadow-md dark:focus:border-zinc-800 focus:outline-none focus:ring-1 dark:focus:ring-zinc-800 focus:border-white focus:ring-white rounded-lg px-3 py-3 text-md w-full lg:w-[70%] bg-transparent"
      rows={6}
      {...rest}
    />
  );
};

export default Textarea;
