import { ReactNode } from "react";

export interface TypewriterProps {
  words: string[];
  loop?: number | boolean;
  cursor?: boolean;
  cursorStyle?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
}

export interface Inavitems {
  text: string;
  to: string;
}

export interface Isocialmedia {
  href: string;
  icon: ReactNode;
}

export interface Iskills {
  src: string;
  alt: string;
  children: string;
}

export interface Itools {
  src: string;
  alt: string;
  children: string;
}

export interface Iprojects {
  id: number;
  name: string;
  description: string[];
  image: string;
  vercel?: string;
  github: string;
}
