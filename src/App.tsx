import { Toaster } from "@/shared/components/ui/Sonner";
import QuestionCard from "./features/questions/QuestionCard/QuestionCard";
import Container from "./shared/components/ui/Container";
import { useQuestionStore } from "./features/questions/model/questionStore";
import { UploadFile } from "./shared/components/ui/UploadFile";
import { ResultsCard } from "./features/questions/ResultsCard/ResultsCard";
function App() {
  const setQuestions = useQuestionStore((state) => state.setQuestions);
  const questions = useQuestionStore((state) => state.questions);
  const currentQuestion = useQuestionStore((state) => state.currentQuestion);
  const setCurrentQuestion = useQuestionStore(
    (state) => state.setCurrentQuestion
  );
  const addAnswer = useQuestionStore((state) => state.addAnswer);
  const showResults =
    currentQuestion + 1 > questions.length && questions.length > 0;
  const answers = useQuestionStore((state) => state.answers);
  return (
    <>
      {!showResults ? (
        <div className="flex justify-center bg-card border-primary border-2 rounded-xl w-20">
          {currentQuestion + 1}/{questions.length}
        </div>
      ) : null}

      <Container className="items-center p-4 justify-center overflow-scroll">
        {!showResults && questions.length !== 0 && (
          <QuestionCard
            onClick={(idx) => {
              addAnswer(idx);
              setCurrentQuestion(currentQuestion + 1);
            }}
            question={questions?.[currentQuestion]}
          />
        )}
        {!showResults && questions.length === 0 && (
          <UploadFile
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const questionsData = await file.text();
              const questionsDataJson = JSON.parse(questionsData);
              setQuestions(questionsDataJson);
            }}
          />
        )}
        {showResults && (
          <ResultsCard questions={questions} answersIdx={answers} />
        )}
      </Container>
      <Toaster />
    </>
  );
}

export default App;
