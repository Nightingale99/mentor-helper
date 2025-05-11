import { cn } from "@/shared/lib/utils";

interface QuestionCardProps {
  className?: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ className }) => {
  return <div className={cn(className)}>DIV</div>;
};

export default QuestionCard;
