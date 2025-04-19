import { useState } from "react";

export default function Quiz() {
  const questions = [
    {
      question: "What is the normal range for adult body temperature?",
      options: ["35°C–36°C", "36.5°C–37.5°C", "38°C–39°C"],
      answer: "36.5°C–37.5°C",
    },
    {
      question: "How many chambers are there in the human heart?",
      options: ["2", "4", "3"],
      answer: "4",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    setCurrent(current + 1);
  };

  if (current >= questions.length) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Your score: {score} / {questions.length}</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{questions[current].question}</h2>
      {questions[current].options.map((opt, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(opt)}
          style={{
            display: "block",
            margin: "10px 0",
            padding: "10px",
            width: "100%",
            maxWidth: "300px"
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}