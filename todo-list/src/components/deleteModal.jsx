import React from "react";
import "./DeleteModal.css";

const DeleteModal = ({ task, confirmDelete, cancelDelete }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2
          style={{
            backgroundColor: "red",
            textAlign: "center",
            color: "White",
          }}
        >
          Delete
        </h2>
        <p> Do you want to delete task "{task.assignedTo}"?</p>
        <div className="modal-actions">
          <button onClick={cancelDelete}>No</button>
          <button onClick={confirmDelete}>Yes</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
