export interface TypewriterProps {
  words: string[];
  loop?: number | boolean;
  cursor?: boolean;
  cursorStyle?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
}
