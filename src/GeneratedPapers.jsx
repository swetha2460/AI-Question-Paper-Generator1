import { useState } from "react";
import "./GeneratePaper.css";

function GeneratePaper({ setPage }) {

  const [subject, setSubject] = useState("Internet of Things");
  const [totalMarks, setTotalMarks] = useState("100");

  const [easy, setEasy] = useState("30");
  const [medium, setMedium] = useState("50");
  const [hard, setHard] = useState("20");

  const [partA, setPartA] = useState("10 × 2");
  const [partB, setPartB] = useState("5 × 13");
  const [partC, setPartC] = useState("1 × 15");

  const generatePaper = () => {

    const total =
      Number(easy) +
      Number(medium) +
      Number(hard);

    if (total !== 100) {
      alert("Difficulty percentage must be exactly 100%");
      return;
    }

    alert("Question paper generated successfully!");

    setPage("validation");
  };

  return (
    <div className="generate-page">

      <h1>Generate Question Paper</h1>

      <p>
        Create a balanced question paper based on faculty requirements.
      </p>

      <div className="generate-card">

        <h2>Exam Configuration</h2>

        {/* Subject */}

        <label>Subject</label>

        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option>Internet of Things</option>
          <option>Computer Networks</option>
          <option>Cloud Computing</option>
          <option>Big Data Analytics</option>
        </select>

        {/* Total Marks */}

        <label>Total Marks</label>

        <input
          type="number"
          value={totalMarks}
          onChange={(e) => setTotalMarks(e.target.value)}
        />

        {/* Difficulty */}

        <h3>Difficulty Distribution</h3>

        <div className="difficulty-grid">

          <div>
            <label>Easy (%)</label>

            <input
              type="number"
              value={easy}
              onChange={(e) => setEasy(e.target.value)}
            />
          </div>

          <div>
            <label>Medium (%)</label>

            <input
              type="number"
              value={medium}
              onChange={(e) => setMedium(e.target.value)}
            />
          </div>

          <div>
            <label>Hard (%)</label>

            <input
              type="number"
              value={hard}
              onChange={(e) => setHard(e.target.value)}
            />
          </div>

        </div>

        <p>
          Difficulty Total:{" "}
          <b>
            {Number(easy) + Number(medium) + Number(hard)}%
          </b>
        </p>

        {/* Pattern */}

        <h3>Question Paper Pattern</h3>

        <label>Part A</label>

        <select
          value={partA}
          onChange={(e) => setPartA(e.target.value)}
        >
          <option>10 × 2</option>
          <option>5 × 2</option>
        </select>

        <label>Part B</label>

        <select
          value={partB}
          onChange={(e) => setPartB(e.target.value)}
        >
          <option>5 × 13</option>
          <option>5 × 10</option>
        </select>

        <label>Part C</label>

        <select
          value={partC}
          onChange={(e) => setPartC(e.target.value)}
        >
          <option>1 × 15</option>
          <option>1 × 10</option>
        </select>

        {/* Generate */}

        <button
          className="generate-button"
          onClick={generatePaper}
        >
          🤖 Generate Question Paper
        </button>

      </div>

    </div>
  );
}

export default GeneratePaper;