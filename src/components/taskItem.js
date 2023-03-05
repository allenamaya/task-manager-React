import React, { useEffect, useState } from "react";

const TaskItem = ({ taskId }) => {
    const [task, setTask] = useState(null);
    const [description, setDescription] = useState("");
    const [due_date, setDueDate] = useState("");

    useEffect(() => {
        const fetchTask = async () => {
            const response = await fetch(`http://your-api-endpoint.com/tasks/${taskId}`);
            const data = await response.json();
            setTask(data);
            setDescription(data.description);
            setDueDate(data.due_date);
        };
        fetchTask();
    }, [taskId]);

    const handleDelete = async () => {
        const response = await fetch(`http://your-api-endpoint.com/tasks/${taskId}`, {
            method: "DELETE"
        });
        if (response.ok) {
            // handle successful deletion
            console.log("Task deleted successfully");
        } else {
            // handle failed deletion
            console.log("Failed to delete task");
        }
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleDueDateChange = (event) => {
        setDueDate(event.target.value);
    };

    const handlePatch = async () => {
        const patchedTask = { description, due_date };
        const response = await fetch(`http://your-api-endpoint.com/tasks/${taskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(patchedTask)
        });
        if (response.ok) {
            // handle successful patch
            console.log("Task patched successfully");
        } else {
            // handle failed patch
            console.log("Failed to patch task");
        }
    };

    if (!task) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{task.task_name}</h2>
            <p>{task.description}</p>
            <p>Due Date: {task.due_date}</p>
            <button onClick={handleDelete}>Delete</button>
            <br />
            <label>
                Description:
                <input type="text" value={description} onChange={handleDescriptionChange} />
            </label>
            <br />
            <label>
                Due Date:
                <input type="date" value={due_date} onChange={handleDueDateChange} />
            </label>
            <br />
            <button onClick={handlePatch}>Save Changes</button>
        </div>
    );
};

export default TaskItem;