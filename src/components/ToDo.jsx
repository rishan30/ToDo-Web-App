import react, { useState } from 'react';
import "./ToDo.css"

const ToDoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setnewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
            setnewTask('');
        }
    };

    const toggleTask = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    return (
        <div className="todo-app">
            <h1> ToDo App</h1>
            <div className="input-container">
                <input type="text" value={newTask} onChange={(e) => setnewTask(e.target.value)}
                    placeholder="Enter a New Task" />

                <button onClick={addTask}> Add Task </button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className={task.completed ? 'completed' : ''}>
                        <input type="checkbox" checked={tasks.completed}
                            onChange={() => toggleTask(task.id)} />
                        <span> {task.text} </span>
                        <button onClick={() => deleteTask(task.id)}> Delete </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoApp;