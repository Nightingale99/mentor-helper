import { create } from "zustand";

type State = {
  answers: number[];
};

type Action = {
  addAnswer: (newAnswer: number) => void;
};

export const useQuestionStore = create<State & Action>((set) => ({
  answers: [],
  addAnswer: (newAnswer: number) =>
    set(({ answers }) => ({ answers: [...answers, newAnswer] })),
}));
