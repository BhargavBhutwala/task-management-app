import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete, onStatusChange }) => {
  const [sortOption, setSortOption] = useState('');

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedTasks = tasks.slice().sort((a, b) => {
    if (sortOption === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortOption === 'endDate') {
      return new Date(a.endDate) - new Date(b.endDate);
    } else if (sortOption === 'status') {
      return a.status.localeCompare(b.status);
    }
    return tasks;
  });

  return (
    <div>
      <div className="form-group">
        <label htmlFor="sortTasks">Sort By:</label>
        <select id="sortTasks" className="form-control" value={sortOption} onChange={handleSortChange}>
          <option value="">Select</option>
          <option value="title">Title</option>
          <option value="endDate">End Date</option>
          <option value="status">Status</option>
        </select>
      </div>
      {sortedTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
};

export default TaskList;
