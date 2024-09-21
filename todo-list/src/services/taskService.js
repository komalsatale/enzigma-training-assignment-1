
const tasks = [
    { id: 1, assignedTo: 'User 1', status: 'Completed', dueDate: '2024/10/12', priority: 'Low', comments: 'This task is good' },
    { id: 2, assignedTo: 'User 2', status: 'In Progress', dueDate: '2024/09/14', priority: 'High', comments: 'This task is good' },
    { id: 3, assignedTo: 'User 3', status: 'Not Started', dueDate: '2024/08/18', priority: 'Low', comments: 'This task is good' },
    { id: 4, assignedTo: 'User 4', status: 'In Progress', dueDate: '2024/06/12', priority: 'Normal', comments: 'This task is good' },
    { id: 5, assignedTo: 'User 5', status: 'In Progress', dueDate: '2024/05/14', priority: 'High', comments: 'This task is good' },
    { id: 6, assignedTo: 'User 6', status: 'Completed', dueDate: '2024/08/12', priority: 'Low', comments: 'This task is good' },
    { id: 7, assignedTo: 'User 7', status: 'In Progress', dueDate: '2024/07/14', priority: 'Normal', comments: 'This task is good' },
    { id: 8, assignedTo: 'User 8', status: 'Not Started', dueDate: '2024/02/18', priority: 'Low', comments: 'This task is good' },
    { id: 9, assignedTo: 'User 9', status: 'In Progress', dueDate: '2024/10/12', priority: 'Low', comments: 'This task is good' },
    { id: 10, assignedTo: 'User 10', status: 'Not Started', dueDate: '2024/09/14', priority: 'High', comments: 'This task is good' },
    { id: 11, assignedTo: 'User 11', status: 'Completed', dueDate: '2024/08/18', priority: 'Low', comments: 'This task is good' },
    { id: 12, assignedTo: 'User 12', status: 'Completed', dueDate: '2024/06/12', priority: 'Normal', comments: 'This task is good' },
    { id: 13, assignedTo: 'User 13', status: 'Completed', dueDate: '2024/05/14', priority: 'High', comments: 'This task is good' },
    { id: 14, assignedTo: 'User 14', status: 'Completed', dueDate: '2024/08/12', priority: 'Low', comments: 'This task is good' },
    { id: 15, assignedTo: 'User 15', status: 'In Progress', dueDate: '2024/07/14', priority: 'Normal', comments: 'This task is good' },
    { id: 16, assignedTo: 'User 16', status: 'Not Started', dueDate: '2024/08/18', priority: 'Low', comments: 'This task is good' },
    { id: 17, assignedTo: 'User 17', status: 'In Progress', dueDate: '2024/06/12', priority: 'Normal', comments: 'This task is good' },
    { id: 18, assignedTo: 'User 18', status: 'In Progress', dueDate: '2024/05/14', priority: 'High', comments: 'This task is good' },
    { id: 19, assignedTo: 'User 19', status: 'Completed', dueDate: '2024/08/12', priority: 'Low', comments: 'This task is good' },
    { id: 20, assignedTo: 'User 20', status: 'In Progress', dueDate: '2024/06/12', priority: 'Normal', comments: 'This task is good' },
  
  ];
  
  export const getTasks = () => tasks;
  
  export const addTask = (task) => tasks.push(task);
  
  export const updateTask = (updatedTask) => {
    const index = tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) tasks[index] = updatedTask;
  };
  
  export const deleteTask = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) tasks.splice(index, 1);
  };
  

  