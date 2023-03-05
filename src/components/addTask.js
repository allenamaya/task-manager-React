import React, { useState } from "react";

const AddTask = () => {
    const [task_name, setTaskName] = useState("");
    const [description, setDescription] = useState("");
    const [due_date, setDueDate] = useState("");
    const [status, setStatus] = useState("");

    const handleTaskNameChange = (event) => {
        setTaskName(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleDueDateChange = (event) => {
        setDueDate(event.target.value);
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const task = { task_name, description, due_date, status };
        const response = await fetch("http://your-api-endpoint.com/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        });
        if (response.ok) {
            // handle successful submission
            console.log("Task submitted successfully");
        } else {
            // handle failed submission
            console.log("Failed to submit task");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Task Name:
                <input type="text" value={task_name} onChange={handleTaskNameChange} />
            </label>
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
            <label>
                Status:
                <select value={status} onChange={handleStatusChange}>
                    <option value="">Select Status</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddTask;