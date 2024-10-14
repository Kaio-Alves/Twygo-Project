import { CurseItenProps } from "./CurseItenProps";

export type CurseListProps = {
    curses: CurseItenProps[];
    removeCurse: (index: number) => void;
  };