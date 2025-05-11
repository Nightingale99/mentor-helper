import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/Card";
import { cn, getRandomArrayElement } from "@/shared/lib/utils";
import type { Question } from "../model/types";
import { Button } from "@/shared/components/ui/Button";
import { toast } from "sonner";
import { SONNER_MESSAGES } from "@/shared/const";

interface QuestionCardProps {
  className?: string;
  question: Question;
  onClick: (answerIdx: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  className,
  question,
  onClick,
}) => {
  const { title, description, variants } = question;
  return (
    <Card className={cn("min-w-[500px]", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        {variants.map((variant, idx) => (
          <Button
            onClick={() => {
              onClick(idx);
              toast(getRandomArrayElement(SONNER_MESSAGES));
            }}
            key={idx}
          >
            {variant}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
