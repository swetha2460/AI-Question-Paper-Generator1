import { useState } from "react";
import "./AIClassification.css";

function AIClassification() {

  const [approved, setApproved] = useState(false);

  const handleApprove = () => {
    setApproved(true);
  };

  return (
    <div className="ai-page">

      <h1>AI Question Classification</h1>

      <p>
        Automatically classify questions using AI
      </p>

      <div className="ai-card">

        <h3>Question</h3>

        <p className="question">
          Explain the publish-subscribe model of MQTT.
        </p>

        <div className="classification-grid">

          <div>
            <label>Unit</label>

            <select>
              <option>Unit III</option>
              <option>Unit I</option>
              <option>Unit II</option>
              <option>Unit IV</option>
              <option>Unit V</option>
            </select>
          </div>

          <div>
            <label>Difficulty</label>

            <select>
              <option>Medium</option>
              <option>Easy</option>
              <option>Hard</option>
            </select>
          </div>

          <div>
            <label>Bloom Level</label>

            <select>
              <option>Understand</option>
              <option>Remember</option>
              <option>Apply</option>
              <option>Analyze</option>
              <option>Evaluate</option>
              <option>Create</option>
            </select>
          </div>

          <div>
            <label>Question Type</label>

            <select>
              <option>Long Answer</option>
              <option>Short Answer</option>
              <option>Application Based</option>
            </select>
          </div>

        </div>

        <div className="ai-status">
          🤖 AI Classification Completed
        </div>

        {!approved ? (

          <button onClick={handleApprove}>
            ✅ Approve Classification
          </button>

        ) : (

          <div className="approved-message">
            ✅ Classification Approved
          </div>

        )}

      </div>

    </div>
  );
}

export default AIClassification;