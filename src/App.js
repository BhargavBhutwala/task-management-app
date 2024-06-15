import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import Login from './Components/Login';
import { db } from './firebase';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      if (user) {
        console.log("Fetching tasks for user:", user); // Debugging log
        const tasksSnapshot = await db.collection('tasks').get();
        const tasksData = tasksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTasks(tasksData);
      }
    };
    fetchTasks();
  }, [user]); // Dependency array includes 'user'

  const handleSave = async (task) => {
    try {
      if (currentTask && currentTask.id) {
        await db.collection('tasks').doc(currentTask.id).update(task);
        setTasks(tasks.map(t => t.id === currentTask.id ? { ...task, id: currentTask.id } : t));
      } else {
        const docRef = await db.collection('tasks').add({ ...task, ownerId: user.id, status: 'Pending' });
        setTasks([...tasks, { ...task, id: docRef.id, ownerId: user.id, status: 'Pending' }]);
      }
      setCurrentTask(null);
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  const handleEdit = (task) => {
    setCurrentTask(task);
  };

  const handleDelete = async (id) => {
    try {
      await db.collection('tasks').doc(id).delete();
      setTasks(tasks.filter(t => t.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await db.collection('tasks').doc(id).update({ status: newStatus });
      setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  const filteredTasks = user ? (
    tasks.filter(task =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (user.role === 'admin' ? true : task.ownerId === user.id)
    )
  ) : [];

  return (
    <Router>
      <div className="App">
        {user && <Navbar user={user} onLogout={handleLogout} onSearch={setSearchQuery} />}
        <div className="container mt-4">
          <Routes>
            <Route path="/login" element={<Login onLogin={setUser} />} />
            <Route path="/tasks" element={
              user ? (
                <>
                  <h2>Tasks</h2>
                  <button className="btn btn-primary mb-3" onClick={() => setCurrentTask({})}>Create Task</button>
                  {currentTask && (
                    <TaskForm
                      task={currentTask}
                      onSave={handleSave}
                      onCancel={() => setCurrentTask(null)}
                    />
                  )}
                  <TaskList
                    tasks={filteredTasks}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onStatusChange={handleStatusChange}
                  />
                </>
              ) : (
                <Navigate to="/login" />
              )
            } />
            <Route path="/" element={
              user ? <Navigate to="/tasks" /> : <Navigate to="/login" />
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;