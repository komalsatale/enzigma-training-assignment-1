import React, { useState } from "react";

const TaskTable = ({
  tasks,
  onEdit,
  handleDeleteClick,
  selectedTasks,
  handleSelectTask,
  handleSelectAll,
}) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div>
      <div className="table-responsive">
        <table className="table-data">
          <thead>
            <tr style={{ color: "indigo" }}>
              <th>
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={
                    selectedTasks.length === tasks.length && tasks.length > 0
                  }
                />
              </th>
              <th>Assigned To</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Comments</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tasks.length === 0 ? (
              <tr>
                <td colSpan="7">No tasks available.</td>
              </tr>
            ) : (
              tasks.map((task) => (
                <tr key={task.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedTasks.includes(task.id)}
                      onChange={() => handleSelectTask(task.id)}
                    />
                  </td>
                  <td style={{ color: "blue" }}>{task.assignedTo}</td>
                  <td>{task.status}</td>
                  <td>{task.dueDate}</td>
                  <td>{task.priority}</td>
                  <td>{task.comments}</td>
                  <td>
                    <button
                      style={{ backgroundColor: "white" }}
                      onClick={() => toggleDropdown(task.id)}
                    >
                      {openDropdown === task.id ? "▲" : "▼"}
                    </button>
                    {openDropdown === task.id && (
                      <div className="dropdown-menu">
                        <button onClick={() => onEdit(task)}>Edit</button>
                        <button onClick={() => handleDeleteClick(task)}>
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
