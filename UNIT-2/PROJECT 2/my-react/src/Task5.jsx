import { useState } from "react";
function Task5() {
  const [data, setData] = useState({
    name: "",
    age: "",
    department: ""
  });

  function changeData(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div>
      <h2>Student Details</h2>

      <label>Name: </label>

      <input
        type="text"
        name="name"
        value={data.name}
        onChange={changeData}
      />
      <br /><br />

      <label>Age: </label>

      <input
        type="number"
        name="age"
        value={data.age}
        onChange={changeData}
      />
      <br /><br />

      <label>Department: </label>

      <input
        type="text"
        name="department"
        value={data.department}
        onChange={changeData}
      />
      <h3>Entered Details</h3>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>Department: {data.department}</p>
    </div>
  );
}

export default Task5;