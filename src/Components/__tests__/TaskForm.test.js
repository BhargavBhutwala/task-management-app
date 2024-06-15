import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../TaskForm';

describe('TaskForm', () => {
  const mockOnSave = jest.fn();
  const mockOnCancel = jest.fn();

  test('renders TaskForm with empty fields initially', () => {
    render(<TaskForm onSave={mockOnSave} onCancel={mockOnCancel} />);

    expect(screen.getByLabelText(/Title/i)).toHaveValue('');
    expect(screen.getByLabelText(/Description/i)).toHaveValue('');
    expect(screen.getByLabelText(/End Date/i)).toHaveValue('');
  });

  test('allows the user to submit a new task', () => {
    render(<TaskForm onSave={mockOnSave} onCancel={mockOnCancel} />);

    fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'New Task' } });
    fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Task description' } });
    fireEvent.change(screen.getByLabelText(/End Date/i), { target: { value: '2023-12-31' } });

    fireEvent.click(screen.getByText(/Save/i));

    expect(mockOnSave).toHaveBeenCalledWith({
      title: 'New Task',
      description: 'Task description',
      endDate: '2023-12-31',
      status: 'Pending', // Ensure this default status matches your implementation
    });
  });
});
