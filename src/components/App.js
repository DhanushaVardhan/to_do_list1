import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (id) => {
    const newTasks = tasks.map((task) => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const removeTask = (id) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
      const newTasks = [...tasks];
      newTasks[taskIndex] = { ...newTasks[taskIndex], removed: true };
      setTasks(newTasks);
      
      setTimeout(() => {
        setTasks(tasks.filter((task) => task.id !== id));
      }, 300);
    }
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} onTaskComplete={completeTask} onTaskRemove={removeTask} />
    </div>
  );
}

export default App;
