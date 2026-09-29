import React from "react";
import "./Progress.css";
 
function Progress() {
  const subjects = [
    { name: "Web Interface", marks: 85 },
    { name: "Data Structures", marks: 78 },
    { name: "Database Management", marks: 82 },
    { name: "Java Programming", marks: 88 },
    { name: "Computer Networks", marks: 75 },
  ];
 
  const total = subjects.reduce((sum, subject) => sum + subject.marks, 0);
  const percentage = total / subjects.length;
 
  let grade = "";
 
  if (percentage >= 90) {
    grade = "A+";
  } else if (percentage >= 80) {
    grade = "A";
  } else if (percentage >= 70) {
    grade = "B";
  } else if (percentage >= 60) {
    grade = "C";
  } else {
    grade = "D";
  }
 
  return (
    <div className="progress-page">
 
      <div className="progress-card">
 
        {/* College Header */}
        <div className="college-header">
          <h1>PRINCE DR. K. VASUDEVAN COLLEGE OF ENGINEERING AND TECHNOLOGY</h1>
          <p>Department of Cyber Security</p>
          <h2>STUDENT PROGRESS CARD</h2>
        </div>
 
        {/* Student Details */}
        <div className="student-details">
          <div>
            <p><b>Name:</b>Flana </p>
            <p><b>Register No:</b> 411625104021</p>
          </div>
 
          <div>
            <p><b>Department:</b> B.E.</p>
            <p><b>Semester:</b> III</p>
          </div>
        </div>
 
        {/* Marks Table */}
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Subject</th>
              <th>Marks</th>
              <th>Grade</th>
              <th>Result</th>
            </tr>
          </thead>
 
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{subject.name}</td>
                <td>{subject.marks}</td>
                <td>
                  {subject.marks >= 90
                    ? "A+"
                    : subject.marks >= 80
                    ? "A"
                    : subject.marks >= 70
                    ? "B"
                    : subject.marks >= 60
                    ? "C"
                    : "D"}
                </td>
                <td className="pass">PASS</td>
              </tr>
            ))}
          </tbody>
        </table>
 
        {/* Summary */}
        <div className="summary">
          <div>
            <span>Total Marks</span>
            <b>{total} / {subjects.length * 100}</b>
          </div>
 
          <div>
            <span>Percentage</span>
            <b>{percentage.toFixed(2)}%</b>
          </div>
 
          <div>
            <span>Overall Grade</span>
            <b>{grade}</b>
          </div>
 
          <div>
            <span>Result</span>
            <b className="overall-pass">PASS</b>
          </div>
        </div>
 
        {/* Footer */}
        <div className="card-footer">
          <p><b>Class Teacher</b></p>
          <p><b>Principal</b></p>
        </div>
 
      </div>
 
    </div>
  );
}
 
export default Progress;