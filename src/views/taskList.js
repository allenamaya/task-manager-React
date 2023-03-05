import React, { useState, useEffect } from "react";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://your-api-endpoint.com/tasks");
            const data = await response.json();
            setTasks(data);
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        const response = await fetch(`http://your-api-endpoint.com/tasks/${id}`, {
            method: "DELETE",
        });
        if (response.ok) {
            setTasks(tasks.filter((task) => task.id !== id));
            console.log("Task deleted successfully");
        } else {
            console.log("Task deletion failed");
        }
    };

    const handleEdit = async (id, updates) => {
        const response = await fetch(`http://your-api-endpoint.com/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updates),
        });
        if (response.ok) {
            setTasks(
                tasks.map((task) =>
                    task.id === id ? { ...task, ...updates } : task
                )
            );
            console.log("Task updated successfully");
        } else {
            console.log("Task update failed");
        }
    };

    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <h2>{task.task_name}</h2>
                        <p>{task.description}</p>
                        <p>{task.due_date}</p>
                        <p>{task.status}</p>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                        <button
                            onClick={() =>
                                handleEdit(task.id, {
                                    description: "New description",
                                    due_date: "2023-04-05",
                                })
                            }
                        >
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
