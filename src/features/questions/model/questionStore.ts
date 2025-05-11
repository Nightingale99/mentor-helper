import { create } from "zustand";
import type { Question } from "./types";

type State = {
  answers: number[];
  questions: Question[];
  currentQuestion: number;
};

type Action = {
  addAnswer: (newAnswer: number) => void;
  setQuestions: (questions: Question[]) => void;
  setCurrentQuestion: (newCurrentQuestion: number) => void;
};

export const useQuestionStore = create<State & Action>((set) => ({
  answers: [],
  questions: [],
  currentQuestion: 0,
  addAnswer: (newAnswer) =>
    set(({ answers, ...state }) => ({
      ...state,
      answers: [...answers, newAnswer],
    })),
  setQuestions: (newQuestions) =>
    set((state) => ({ ...state, questions: newQuestions })),
  setCurrentQuestion: (newCurrentQuestion) =>
    set((state) => ({ ...state, currentQuestion: newCurrentQuestion })),
}));
