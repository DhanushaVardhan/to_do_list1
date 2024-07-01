import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onTaskComplete, onTaskRemove }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task 
          key={task.id} 
          task={task} 
          index={index} // Pass the index for numerical order
          onTaskComplete={onTaskComplete} 
          onTaskRemove={onTaskRemove} 
        />
      ))}
    </div>
  );
};

export default TaskList;
