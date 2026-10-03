import "./Validation.css";

function Validation() {
  return (
    <div className="validation-page">

      <h1>Question Paper Validation</h1>

      <p>
        Check the generated paper before final approval
      </p>

      <div className="validation-card">

        <div className="validation-item">
          <div>
            <h3>📚 Unit Coverage</h3>
            <p>All required units are covered</p>
          </div>

          <span className="valid">✓ Passed</span>
        </div>

        <div className="validation-item">
          <div>
            <h3>📊 Difficulty Distribution</h3>
            <p>Easy 30% • Medium 50% • Hard 20%</p>
          </div>

          <span className="valid">✓ Passed</span>
        </div>

        <div className="validation-item">
          <div>
            <h3>🔁 Duplicate Questions</h3>
            <p>No duplicate questions found</p>
          </div>

          <span className="valid">✓ Passed</span>
        </div>

        <div className="validation-item">
          <div>
            <h3>📝 Total Marks</h3>
            <p>100 marks successfully verified</p>
          </div>

          <span className="valid">✓ Passed</span>
        </div>

      </div>

      <div className="validation-success">
        ✅ Question paper passed all validation checks
      </div>

      <button className="approve-button">
        ✅ Approve Question Paper
      </button>

    </div>
  );
}

export default Validation;