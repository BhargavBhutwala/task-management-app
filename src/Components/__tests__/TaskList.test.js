import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from '../TaskList';

describe('TaskList', () => {
  const mockTasks = [
    { id: 1, title: 'Task 1', description: 'Description 1', endDate: '2023-12-31', status: 'Pending' },
    { id: 2, title: 'Task 2', description: 'Description 2', endDate: '2023-12-30', status: 'Completed' },
  ];

  const mockOnEdit = jest.fn();
  const mockOnDelete = jest.fn();
  const mockOnStatusChange = jest.fn();

  beforeEach(() => {
    mockOnEdit.mockClear();
    mockOnDelete.mockClear();
    mockOnStatusChange.mockClear();
  });

  test('renders TaskList with tasks', () => {
    render(<TaskList tasks={mockTasks} onEdit={mockOnEdit} onDelete={mockOnDelete} onStatusChange={mockOnStatusChange} />);

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  test('calls onEdit when edit button is clicked', () => {
    render(<TaskList tasks={mockTasks} onEdit={mockOnEdit} onDelete={mockOnDelete} onStatusChange={mockOnStatusChange} />);

    fireEvent.click(screen.getAllByText(/Edit/i)[0]);

    expect(mockOnEdit).toHaveBeenCalledWith(mockTasks[0]);
  });

  test('calls onDelete when delete button is clicked', () => {
    render(<TaskList tasks={mockTasks} onEdit={mockOnEdit} onDelete={mockOnDelete} onStatusChange={mockOnStatusChange} />);

    fireEvent.click(screen.getAllByText(/Delete/i)[0]);

    expect(mockOnDelete).toHaveBeenCalledWith(mockTasks[0].id);
  });

  test('sorts tasks by title', () => {
    render(<TaskList tasks={mockTasks} onEdit={mockOnEdit} onDelete={mockOnDelete} onStatusChange={mockOnStatusChange} />);

    fireEvent.change(screen.getByLabelText(/Sort By:/i), { target: { value: 'title' } });

    const sortedTasks = screen.getAllByText(/Task/);
    expect(sortedTasks[0]).toHaveTextContent('Task 1');
    expect(sortedTasks[1]).toHaveTextContent('Task 2');
  });
});
