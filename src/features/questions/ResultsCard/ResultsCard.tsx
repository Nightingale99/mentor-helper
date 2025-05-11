import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/Card";
import { cn } from "@/shared/lib/utils";
import type { Question } from "../model/types";

interface ResultsCardProps {
  className?: string;
  questions: Question[];
  answersIdx: number[];
}

export function ResultsCard({
  className,
  questions,
  answersIdx,
}: ResultsCardProps) {
  return (
    <Card className={cn("w-full overflow-scroll", className)}>
      <CardHeader>
        <CardTitle>Результаты</CardTitle>
        <CardDescription>Так держать Эмилия!</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {questions.map(({ title, answerIdx, variants }, idx) => (
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">{title}</h3>{" "}
            <span>Правильно - {variants[answerIdx]}</span>
            <span>
              Твой ответ -{" "}
              <span
                className={cn({
                  "text-[green]": answersIdx[idx] === answerIdx,
                  "text-[red]": answersIdx[idx] !== answerIdx,
                })}
              >
                {variants[answersIdx[idx]]}
              </span>
            </span>
          </div>
        ))}
        <p>
          Итого:{" "}
          {questions.reduce((acc, val, idx) => {
            if (val.answerIdx === answersIdx[idx]) {
              return acc + 1;
            }
            return acc;
          }, 0)}{" "}
          из {questions.length}
        </p>
      </CardContent>
    </Card>
  );
}
