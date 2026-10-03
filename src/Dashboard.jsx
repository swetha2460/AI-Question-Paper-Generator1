import { useState } from "react";
import "./Dashboard.css";

import Subjects from "./Subjects";
import Syllabus from "./Syllabus";
import QuestionBank from "./QuestionBank";
import AIClassification from "./AIClassification";
import GeneratePaper from "./GeneratePaper";
import Validation from "./Validation";
import GeneratedPapers from "./GeneratedPapers";

function Dashboard() {

  const [page, setPage] = useState("dashboard");

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <h2>🤖 AI QPG</h2>

        <button onClick={() => setPage("dashboard")}>
          🏠 Dashboard
        </button>

        <button onClick={() => setPage("subjects")}>
          📚 Subjects
        </button>

        <button onClick={() => setPage("syllabus")}>
          📖 Syllabus
        </button>

        <button onClick={() => setPage("questionbank")}>
          ❓ Question Bank
        </button>

        <button onClick={() => setPage("ai")}>
          🤖 AI Classification
        </button>

        <button onClick={() => setPage("generate")}>
          📝 Generate Paper
        </button>

        <button onClick={() => setPage("validation")}>
          ✅ Validation
        </button>

        <button onClick={() => setPage("papers")}>
          📄 Generated Papers
        </button>

        <button
          className="logout-button"
          onClick={() => window.location.reload()}
        >
          🚪 Logout
        </button>

      </aside>


      {/* MAIN CONTENT */}
      <main className="main-content">

        {/* DASHBOARD */}
        {page === "dashboard" && (
          <div>

            <h1>AI Question Paper Generator</h1>

            <p>Faculty Dashboard</p>


            <div className="cards">

              {/* SUBJECTS */}
              <div
                className="card"
                onClick={() => setPage("subjects")}
              >
                <h3>📚 Subjects</h3>
                <h2>0</h2>
                <p>Manage Subjects</p>
              </div>


              {/* QUESTION BANK */}
              <div
                className="card"
                onClick={() => setPage("questionbank")}
              >
                <h3>❓ Question Bank</h3>
                <h2>0</h2>
                <p>Manage Questions</p>
              </div>


              {/* AI CLASSIFIED */}
              <div
                className="card"
                onClick={() => setPage("ai")}
              >
                <h3>🤖 AI Classified</h3>
                <h2>0</h2>
                <p>AI Classified Questions</p>
              </div>


              {/* GENERATED PAPERS */}
              <div
                className="card"
                onClick={() => setPage("papers")}
              >
                <h3>📄 Generated Papers</h3>
                <h2>0</h2>
                <p>View Question Papers</p>
              </div>

            </div>

          </div>
        )}


        {/* SUBJECTS */}
        {page === "subjects" && (
          <Subjects />
        )}


        {/* SYLLABUS */}
        {page === "syllabus" && (
          <Syllabus />
        )}


        {/* QUESTION BANK */}
        {page === "questionbank" && (
          <QuestionBank />
        )}


        {/* AI CLASSIFICATION */}
        {page === "ai" && (
          <AIClassification />
        )}


        {/* GENERATE PAPER */}
        {page === "generate" && (
          <GeneratePaper setPage={setPage} />
        )}


        {/* VALIDATION */}
        {page === "validation" && (
          <Validation setPage={setPage} />
        )}


        {/* GENERATED PAPERS */}
        {page === "papers" && (
          <GeneratedPapers />
        )}

      </main>

    </div>
  );
}

export default Dashboard;