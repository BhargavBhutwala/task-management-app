import React, { useState, useEffect } from 'react';

const TaskItem = ({ task, onEdit, onDelete, onStatusChange }) => {
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (task.endDate < today && task.status !== 'Completed') {
      onStatusChange(task.id, 'Overdue');
    }
  }, [task, onStatusChange]);

  const toggleStatusDropdown = () => {
    setShowStatusDropdown(!showStatusDropdown);
  };

  const handleStatusChange = (status) => {
    onStatusChange(task.id, status);
    setShowStatusDropdown(false); // Close dropdown after selecting an option
  };

  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <p className="card-text">{task.description}</p>
        <p className="card-text"><small className="text-muted">Due: {task.endDate}</small></p>
        <p className="card-text">
          <small className={`badge badge-${task.status === 'Pending' ? 'warning' : task.status === 'Completed' ? 'success' : 'danger'}`}>
            {task.status}
          </small>
        </p>
        <div className="btn-group">
          <button className="btn btn-info dropdown-toggle" onClick={toggleStatusDropdown}>
            Toggle Status: {task.status}
          </button>
          {showStatusDropdown && (
            <div className="dropdown-menu" style={{ display: 'block' }}>
              <button className="dropdown-item" onClick={() => handleStatusChange('Pending')}>Pending</button>
              <button className="dropdown-item" onClick={() => handleStatusChange('Completed')}>Completed</button>
            </div>
          )}
        </div>
        <button className="btn btn-primary mx-1" onClick={() => onEdit(task)}>Edit</button>
        <button className="btn btn-danger mx-1" onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
