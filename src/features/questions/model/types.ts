type QuestionVariants = string[];

export type Question = {
  title: string;
  description?: string;
  variants: QuestionVariants;
  answerIdx: number;
};
