import { useState } from "react";
import "./QuestionBank.css";

function QuestionBank() {
  const [question, setQuestion] = useState("");
  const [unit, setUnit] = useState("Unit I");
  const [marks, setMarks] = useState("2");
  const [difficulty, setDifficulty] = useState("Easy");
  const [bloom, setBloom] = useState("Remember");
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    if (question.trim() === "") {
      alert("Please enter a question");
      return;
    }

    const newQuestion = {
      question,
      unit,
      marks,
      difficulty,
      bloom,
    };

    setQuestions([...questions, newQuestion]);
    setQuestion("");
  };

  return (
    <div className="question-bank-page">

      <h1>Question Bank</h1>
      <p>Add and manage questions</p>

      <div className="question-form">

        <textarea
          placeholder="Enter question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <option>Unit I</option>
          <option>Unit II</option>
          <option>Unit III</option>
          <option>Unit IV</option>
          <option>Unit V</option>
        </select>

        <select
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        >
          <option value="2">2 Marks</option>
          <option value="13">13 Marks</option>
          <option value="15">15 Marks</option>
        </select>

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <select
          value={bloom}
          onChange={(e) => setBloom(e.target.value)}
        >
          <option>Remember</option>
          <option>Understand</option>
          <option>Apply</option>
          <option>Analyze</option>
          <option>Evaluate</option>
          <option>Create</option>
        </select>

        <button onClick={addQuestion}>
          + Add Question
        </button>

      </div>

      <div className="question-list">

        {questions.length === 0 ? (
          <p>No questions added yet.</p>
        ) : (
          questions.map((item, index) => (
            <div className="question-card" key={index}>

              <h3>
                Q{index + 1}. {item.question}
              </h3>

              <div className="question-details">
                <span>📖 {item.unit}</span>
                <span>📝 {item.marks} Marks</span>
                <span>📊 {item.difficulty}</span>
                <span>🧠 {item.bloom}</span>
              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default QuestionBank;