import { useState, useEffect } from 'react';

import './App.css';


function App() {
  const [task, setTask] = useState({});
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(-1);
  const [personList] = useState(["Manager", "Team Leader", "Employee"]);

  useEffect(() => {
    setTimeout(() => {
      getLocalStorageData();
    }, 1000);
  }, []);

  const getLocalStorageData = () => {
    const data = JSON.parse(localStorage.getItem('taskData'));
    if (data !== null) {
      setTaskList(data);
    } else {
      setTaskList([]);
    }
    setLoading(true);
  };

  const getInputData = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const submitData = (e) => {
    e.preventDefault();
    let newList = [...taskList];

    if (index !== -1) {
      newList[index] = task;
    } else {
      task.id = Math.round(Math.random() * 10000);
      newList.push(task);
    }

    setTaskList(newList);
    localStorage.setItem('taskData', JSON.stringify(newList));
    setTask({});
    setIndex(-1);
  };

  const removeData = (id) => {
    let newList = [...taskList];
    newList = newList.filter((v) => v.id !== id);
    setTaskList(newList);
    localStorage.setItem('taskData', JSON.stringify(newList));
  };

  const updateData = (id) => {
    let list = [...taskList];
    let pos = list.findIndex((v) => v.id === id);
    if (pos !== -1) {
      setTask(list[pos]);
      setIndex(pos);
    }
  };

  return (
    <>
      <h1 align="center">Employee Data</h1>
      <form method="post" onSubmit={submitData}>
        <table border={1} align="center" cellPadding={10}>
          <tbody>
            <tr>
              <td>Enter Your Name:</td>
              <td>
                <input
                  type="text"
                  name="name"
                  onChange={getInputData}
                  value={task.name || ""}
                />
              </td>
            </tr>
            <tr>
              <td>Enter Your Email:</td>
              <td>
                <input
                  type="text"
                  name="Email"
                  onChange={getInputData}
                  value={task.value || ""}
                />
              </td>
            </tr>
            <tr>
              <td>Image URL:</td>
              <td>
                <input
                  type="text"
                  name="img"
                  onChange={getInputData}
                  value={task.img || ""}
                />
              </td>
            </tr>
            <tr>
              <td>Select Priority:</td>
              <td>
                <input
                  type="radio"
                  name="priority"
                  value="urgent"
                  onChange={getInputData}
                  checked={task.priority === "urgent"}
                /> Urgent
                <input
                  type="radio"
                  name="priority"
                  value="overdue"
                  onChange={getInputData}
                  checked={task.priority === "overdue"}
                /> Overdue
              </td>
            </tr>
            <tr>
              <td>Completed By:</td>
              <td>
                <select
                  name="person"
                  onChange={getInputData}
                  value={task.person || ""}
                >
                  <option value="">---Select Person---</option>
                  {personList.map((v, i) => (
                    <option key={i} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input
                  type="submit"
                  value={index !== -1 ? "Update" : "Add"}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <br />
      <h2 align="center">Task Cards</h2>

      {!loading ? (
        <p align="center">Loading...!</p>
      ) : (
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "20px"
        }}>
          {taskList.map((v) => (
            <div
              key={v.id}
              style={{
                width: "250px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px",
                boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
                textAlign: "center"
              }}
            >
              <img
                src={v.img}
                alt="Employee"
                width="200"
                height="150"
                style={{ objectFit: "cover", borderRadius: "4px" }}
              />
              <h3>{v.name}</h3>
              <p><strong>Email:</strong> {v.value}</p>
              <p><strong>Priority:</strong> {v.priority}</p>
              <p><strong>Completed By:</strong> {v.person}</p>
              <div style={{ marginTop: "10px" }}>
                <button onClick={() => removeData(v.id)} style={{ marginRight: "10px" }}>Delete</button>
                <button onClick={() => updateData(v.id)}>Update</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
