import React, { useState, useEffect } from "react";
import Header from "../components/header";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://127.0.0.1:9292/tasks");
            const data = await response.json();
            setTasks(data);
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        const response = await fetch(`http://127.0.0.1:9292/tasks/${id}`, {
            method: "DELETE",
        });
        if (response.ok) {
            setTasks(tasks.filter((task) => task.id !== id));
            console.log("Task deleted successfully");
        } else {
            console.log("Task deletion failed");
        }
    };

    const handleEdit = async (id, status) => {
        const response = await fetch(`http://127.0.0.1:9292/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status }),
        });
        if (response.ok) {
            setTasks(
                tasks.map((task) =>
                    task.id === id ? { ...task, status } : task
                )
            );
            console.log("Task updated successfully");
        } else {
            console.log("Task update failed");
        }
    };


    return (
        <>
            <Header/>
            <h1>Task List</h1>
            <div style={{
                backgroundColor: "#f1f1f1",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between"
            }}>
                {tasks.map((task) => (
                    <div key={task.id} style={{
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        padding: "15px",
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                        width: "calc(30% - 15px)",
                        marginBottom: "20px"
                    }}>
                        <h2>{task.task_name}</h2>
                        <p>{task.description}</p>
                        <p>{task.due_date}</p>
                        <p>{task.status}</p>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <button onClick={() => handleDelete(task.id)}>Delete</button>
                            <button onClick={() => {
                                const newStatus = prompt("Enter a new status:");
                                handleEdit(task.id, newStatus);
                            }}>Edit</button>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default TaskList;
