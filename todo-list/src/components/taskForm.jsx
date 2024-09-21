import React, { useState, useEffect } from "react";
import { addTask, updateTask } from "../services/taskService";
import "./taskForm.css";

/**
 * The TaskForm component renders a form for creating or editing a task.
 * The component is controlled by the currentTask prop, which is an object with the following properties:
 * id, assignedTo, status, dueDate, priority, and comments.
 * The component also accepts an onClose prop, which is a function that is called when the form is closed.
 * The component also accepts a title prop, which is the title of the form.
 * The component renders a form with the following fields: assignedTo, status, dueDate, priority, and comments.
 * The form has a cancel button and a save button.
 * When the form is submitted, the component calls the onSubmit function, which is provided as a prop.
 * The onSubmit function is called with the currentTask object as an argument.
 */
const TaskForm = ({ currentTask, onClose, title }) => {
  const [task, setTask] = useState({
    id: "",
    assignedTo: "",
    status: "",
    dueDate: "",
    priority: "",
    comments: "",
  });

  useEffect(() => {
    if (currentTask) {
      setTask(currentTask);
    }
  }, [currentTask]);

  /**
   * The handleSubmit function is called when the form is submitted.
   * The function calls the onSubmit function with the currentTask object as an argument.
   * The function also calls the onClose function to close the form.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      updateTask(task);
    } else {
      task.id = Math.random();
      addTask(task);
    }
    onClose();
  };

  return (
    <div className="task-form">
      {/* Display the dynamic title passed via props */}
      <h2>{title}</h2> {/* <-- Displaying the title prop */}
      <form className="form-content" onSubmit={handleSubmit}>
        {/* <h2>{title}</h2> */}
        <div>
          <label>
            <span style={{ color: "red" }}>*</span>Assigned To
          </label>
          <select
            value={task.assignedTo}
            onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
            required
          >
            <option value="">Select User</option>
            <option value="User 1">User 1</option>
            <option value="User 2">User 2</option>
            <option value="User 3">User 3</option>
            <option value="User 4">User 4</option>
            <option value="User 5">User 5</option>
            <option value="User 6">User 6</option>
            <option value="User 7">User 7</option>
            <option value="User 8">User 8</option>
            <option value="User 9">User 9</option>
            <option value="User 10">User 10</option>
            <option value="User 11">User 11</option>
          </select>
        </div>
        <div>
          <label>
            <span style={{ color: "red" }}>*</span>Status
          </label>
          <select
            value={task.status}
            onChange={(e) => setTask({ ...task, status: e.target.value })}
            required
          >
            <option value="">Select Status</option>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div>
          <label>Due Date</label>
          <input
            type="date"
            value={task.dueDate}
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
          />
        </div>
        <div>
          <label>
            <span style={{ color: "red" }}>*</span>Priority
          </label>
          <select
            value={task.priority}
            onChange={(e) => setTask({ ...task, priority: e.target.value })}
            required
          >
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={task.comments}
            onChange={(e) => setTask({ ...task, comments: e.target.value })}
          />
        </div>
        <div className="formBtn">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};


export default TaskForm;
