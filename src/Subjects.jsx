import { useState } from "react";
import "./Syllabus.css";

function Syllabus() {
  const [unit, setUnit] = useState("");
  const [topic, setTopic] = useState("");
  const [units, setUnits] = useState([]);

  const addUnit = () => {
    if (unit.trim() === "" || topic.trim() === "") {
      alert("Please enter unit and topic");
      return;
    }

    setUnits([
      ...units,
      {
        unit: unit,
        topic: topic,
      },
    ]);

    setUnit("");
    setTopic("");
  };

  return (
    <div className="syllabus-page">

      <h1>Syllabus</h1>
      <p>Manage syllabus units and topics</p>

      <div className="syllabus-form">

        <input
          type="text"
          placeholder="Unit (Example: Unit I)"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        />

        <input
          type="text"
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <button onClick={addUnit}>
          + Add Unit
        </button>

      </div>

      <div className="unit-list">

        {units.length === 0 ? (
          <p>No syllabus units added yet.</p>
        ) : (
          units.map((item, index) => (
            <div className="unit-card" key={index}>

              <h3>📖 {item.unit}</h3>

              <p>
                Topic: {item.topic}
              </p>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Syllabus;