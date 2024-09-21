import React, { useState, useEffect } from "react";
import { getTasks, deleteTask } from "../services/taskService";
import DeleteModal from "./DeleteModal";
import TaskTable from "./taskTable";
import Pagination from "./Pagination";
import "./taskList.css";

const TaskList = ({ onEdit }) => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteAllModalOpen, setIsDeleteAllModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(4);
  const [sortStatus, setSortStatus] = useState("");
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    setTasks(getTasks() || []);
  }, []);

  const handleDeleteClick = (task) => {
    setTaskToDelete(task);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    deleteTask(taskToDelete.id);
    setTasks(getTasks() || []);
    setIsModalOpen(false);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
    setTaskToDelete(null);
  };

  const handleDeleteAllConfirm = () => {
    selectedTasks.forEach((id) => {
      deleteTask(id);
    });
    setTasks(getTasks() || []);
    setSelectedTasks([]);
    setIsDeleteAllModalOpen(false);
  };

  const cancelDeleteAll = () => {
    setIsDeleteAllModalOpen(false);
    setSelectedTasks([]);
  };

  const handleSelectAll = () => {
    if (selectedTasks.length === tasks.length) {
      setSelectedTasks([]);
    } else {
      setSelectedTasks(tasks.map((task) => task.id));
      setIsDeleteAllModalOpen(true); // Open confirmation dialog when selecting all
    }
  };

  const handleSelectTask = (id) => {
    setSelectedTasks((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((taskId) => taskId !== id)
        : [...prevSelected, id]
    );
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.status.includes(sortStatus) &&
      task.assignedTo.toLowerCase().includes(searchItem.toLowerCase())
  );

  // Pagination logic
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);
  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Previous Page
  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // Next Page
  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  // First Page
  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  // Last Page
  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <div className="task-list">
      <div className="task-list-header">
        <input
          type="text"
          className="search"
          placeholder="Search"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>
      <p style={{ marginBottom: "0px", marginTop: "0px", marginLeft: "10px" }}>
        {filteredTasks.length} records
      </p>
      <hr />

      <TaskTable
        tasks={currentTasks}
        onEdit={onEdit}
        handleDeleteClick={handleDeleteClick}
        selectedTasks={selectedTasks}
        handleSelectTask={handleSelectTask}
        handleSelectAll={handleSelectAll}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        goToFirstPage={goToFirstPage} // Pass goToFirstPage function
        goToLastPage={goToLastPage} // Pass goToLastPage function
      />

      {isModalOpen && (
        <DeleteModal
          task={taskToDelete}
          confirmDelete={confirmDelete}
          cancelDelete={cancelDelete}
        />
      )}

      {isDeleteAllModalOpen && (
        <DeleteModal
          task={{ assignedTo: "Selected Tasks" }} // Context for confirmation
          confirmDelete={handleDeleteAllConfirm}
          cancelDelete={cancelDeleteAll}
        />
      )}
    </div>
  );
};

export default TaskList;
