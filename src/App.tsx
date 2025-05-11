import QuestionCard from "./features/questions/QuestionCard/QuestionCard";
import Container from "./shared/components/ui/Container";

function App() {
  return (
    <Container className="items-center w-screen h-screen justify-center">
      <QuestionCard
        question={{
          title: "Марджин или боттом?",
          description: "Конкретно ты поняла да?",
          variants: ["Марджин", "Боттом", "Жопа", "Очко", "Граната"],
          answerIdx: 0,
        }}
      />
    </Container>
  );
}

export default App;
