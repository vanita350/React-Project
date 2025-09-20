import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';

function App() {
  let [task, setTask] = useState({});
  let [taskList, settaskList] = useState([]);
  let [lodiing, setLodding] = useState(false);
  let [index, setindex] = useState(-1)
  let [person, setperson] = useState(["Manager", "Team Leader", "Employee"])
  let [member, setmember] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getLocalStoragedata();
    }, 1000)
  }, [])

  let getLocalStoragedata = () => {
    let data = JSON.parse(localStorage.getItem('taskData'));
    if (data != null) {
      settaskList(data);
      setLodding(true)
    } else {
      settaskList([]);
    }
  }

  let getInputData = (e) => {
    let { name, value, type, checked } = e.target;

    if (name === "member") {
      let newMembers = [...member];
      if (checked) {
        if (!newMembers.includes(value)) {
          newMembers.push(value);
        }
      } else {
        newMembers = newMembers.filter((v) => v !== value);
      }
      setmember(newMembers);
      setTask({ ...task, member: newMembers });
    } else {
      setTask({ ...task, [name]: value });
    }
  }

  let submitData = (e) => {
    e.preventDefault();
    let newList = [...taskList];

    if (index !== -1) {
      newList[index] = task;
      toast.success("Record updated successfully", { position: "top-right" });
    } else {
      task.id = Math.round(Math.random() * 1000);
      newList.push(task);
      toast.success("Record added successfully", { position: "top-right" });
    }

    settaskList(newList);
    localStorage.setItem('taskData', JSON.stringify(newList));
    setTask({});
    setmember([]);
    setLodding(true);
    setindex(-1);
  }

  let removeData = (id) => {
    let newList = [...taskList];
    let pos = newList.findIndex((v) => v.id === id);
    if (pos !== -1) {
      newList.splice(pos, 1);
      settaskList(newList);
      localStorage.setItem('taskData', JSON.stringify(newList));
      toast.success("Record deleted successfully", { position: "top-right" });
    }
  }

  let updatedeta = (id) => {
    let list = [...taskList];
    let pos = list.findIndex((v) => v.id === id);
    if (pos !== -1) {
      setTask(list[pos]);
      setindex(pos);
      setmember(list[pos].member || []);
    } else {
      setindex(-1);
    }
  }

  return (
    <>
      <h1 className='localbox' align="center">Localbox Miner</h1>
      <form method='post' onSubmit={submitData}>
        <table className='table' border={0} align='center' >
          <tbody>
            <tr>
              <td>Enter Your Name:</td>
              <td>
                <input
                  type="text"
                  name='name'
                  onChange={getInputData}
                  value={task.name || ""}
                />
              </td>
            </tr>
            <tr>
              <td>Enter Your Value:</td>
              <td>
                <input
                  type="text"
                  name='value'
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
                  name='img'
                  onChange={getInputData}
                  value={task.img || ""}
                />
              </td>
            </tr>
            <tr>
              <td>Select Priority:</td>
              <td>
                <label>
                  <input
                    type="radio"
                    name='priority'
                    value="urgent"
                    onChange={getInputData}
                    checked={task.priority === 'urgent'}
                  /> Urgent
                </label>
                <label>
                  <input
                    type="radio"
                    name='priority'
                    value="overdue"
                    onChange={getInputData}
                    checked={task.priority === 'overdue'}
                  /> Overdue
                </label>
              </td>
            </tr>

 
            <tr>
              <td>Select Team Leader:</td>
              <td>
                <label>
                  <input
                    type="checkbox"
                    name="member"
                    value="rajesh"
                    onChange={getInputData}
                    checked={member.includes("rajesh")}
                  /> Rajesh
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="member"
                    value="kirit"
                    onChange={getInputData}
                    checked={member.includes("kirit")}
                  /> Kirit
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="member"
                    value="Vishal"
                    onChange={getInputData}
                    checked={member.includes("Vishal")}
                  /> Vishal
                </label>
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
                  {person.map((v, i) => (
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
                <input type="submit" value={index !== -1 ? "Update" : "Add"} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <br /><br />

      <table className='table' border={1} align='center'>
        <thead>
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Name</th>
            <th>Value</th>
            <th>Priority</th>
            <th>Team Leaders</th>
            <th>Completed By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!lodiing ? (
            <tr>
              <td colSpan={8}>Loading...</td>
            </tr>
          ) : (
            taskList.map((v, i) => (
              <tr key={v.id}>
                <td>{i + 1}</td>
                <td>
                  <img src={v.img} width={200} height={200} alt="preview" />
                </td>
                <td>{v.name}</td>
                <td>{v.value}</td>
                <td>{v.priority}</td>
                <td>{v.member?.join(', ')}</td>
                <td>{v.person}</td>
                <td>
                  <button onClick={() => removeData(v.id)}>Delete</button>
                  {' | '}
                  <button onClick={() => updatedeta(v.id)}>Edit</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <ToastContainer />
    </>
  )
}

export default App;
