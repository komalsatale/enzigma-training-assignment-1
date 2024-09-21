import React, { useState } from 'react';
import TaskList from './components/taskList';
import TaskForm from './components/taskForm';
import { getTasks } from './services/taskService';
import './App.css';

const App = () => {
  const [editingTask, setEditingTask] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState(getTasks() || []);
  const [loading, setLoading] = useState(false);

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleAddNewTask = () => {
    setEditingTask(null);
    setShowForm(true);
  };

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setTasks(getTasks() || []);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Tasks</h1>
      
        <div className="header-buttons">
          <button onClick={handleAddNewTask}>New Task</button>
          <button onClick={handleRefresh} disabled={loading}>
            {loading ? 'Refreshing...' : 'Refresh'}
          </button>
          
        </div>
      </header>
       
      {loading ? (
        <div className="loading-message">Loading tasks, please wait...</div>
      ) : (
        <TaskList tasks={tasks} onEdit={handleEdit} setTasks={setTasks} />
      )}

      {showForm && (
        <TaskForm
          currentTask={editingTask}
          onClose={() => setShowForm(false)}
          title={editingTask ? 'Edit Task' : 'New Task'}
        />
      )}
    </div>
  );
};

export default App;
