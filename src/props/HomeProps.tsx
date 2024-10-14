import { CurseItenProps } from "./CurseItenProps";

export type HomeProps = {
    curses: CurseItenProps[];
    removeCurse: (index: number) => void;
  };