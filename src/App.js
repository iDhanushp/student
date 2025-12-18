// App.js
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    name: "", 
    className: "",
    branch: "",
  });

  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.className || !formData.branch) {
      alert("Please fill all fields");
      return;
    }

    setStudents((prev) => [...prev, formData]);
    setFormData({
      name: "",
      className: "",
      branch: "",
    });
  };

  return (
    <div className="container">
      <h1 className="title">Student Registration Portal</h1>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter student name"
            value={formData.name}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="form-group">
          <label className="label">Class</label>
          <input
            type="text"
            name="className"
            placeholder="Enter class (e.g., 10th, BCA 1st sem)"
            value={formData.className}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="form-group">
          <label className="label">Branch</label>
          <input
            type="text"
            name="branch"
            placeholder="Enter branch (e.g., CSE, ECE)"
            value={formData.branch}
            onChange={handleChange}
            className="input"
          />
        </div>

        <button type="submit" className="button">
          Register Student
        </button>
      </form>

      <h2 className="subtitle">Registered Students</h2>

      {students.length === 0 ? (
        <p>No students registered yet.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th className="th">#</th>
              <th className="th">Name</th>
              <th className="th">Class</th>
              <th className="th">Branch</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td className="td">{index + 1}</td>
                <td className="td">{student.name}</td>
                <td className="td">{student.className}</td>
                <td className="td">{student.branch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
