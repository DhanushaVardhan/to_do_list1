import React from 'react';

const Task = ({ task, onTaskComplete, onTaskRemove, index }) => {
  return (
    <div className={`task ${task.removed ? 'removed' : ''}`}>

      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onTaskComplete(task.id)}
      />
      <span className="task-number">{index + 1}.</span>
      <span className={`task-text ${task.completed ? 'completed' : ''}`}>
        {task.text}
      </span>
      <button onClick={() => onTaskRemove(task.id)}>Remove</button>
    </div>
  );
};

export default Task;
