import "./Syllabus.css";

function Syllabus() {
  return (
    <div className="syllabus-page">

      <h1>Syllabus</h1>
      <p>Manage subject units and topics</p>

      <div className="syllabus-form">

        <label>Subject</label>
        <select>
          <option>Internet of Things</option>
          <option>Computer Networks</option>
          <option>Cloud Computing</option>
        </select>

        <label>Unit</label>
        <select>
          <option>Unit I</option>
          <option>Unit II</option>
          <option>Unit III</option>
          <option>Unit IV</option>
          <option>Unit V</option>
        </select>

        <label>Topic</label>
        <input
          type="text"
          placeholder="Enter topic"
        />

        <button>Add Topic</button>

      </div>

      <div className="unit-list">

        <div className="unit">
          <h3>Unit I</h3>
          <p>Introduction to IoT</p>
          <p>IoT Architecture</p>
        </div>

        <div className="unit">
          <h3>Unit II</h3>
          <p>Sensors and Actuators</p>
        </div>

      </div>

    </div>
  );
}

export default Syllabus;