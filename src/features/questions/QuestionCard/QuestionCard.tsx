import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/Card";
import { cn } from "@/shared/lib/utils";
import type { Question } from "../model/types";
import { Button } from "@/shared/components/ui/Button";

interface QuestionCardProps {
  className?: string;
  question: Question;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ className, question }) => {
  const { title, description, variants } = question;
  return (
    <Card className={cn("min-w-[500px]", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {variants.map((variant, idx) => (
          <Button key={idx}>{variant}</Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
