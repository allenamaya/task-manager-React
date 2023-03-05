import React, { useState } from "react";
import Header from "./header";

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
        const response = await fetch("http://127.0.0.1:9292/tasks", {
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
        <>
            <Header/>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div style={{ backgroundColor: "#f1f1f1", borderRadius: "10px", width: "40%", padding: "20px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}>
                <form onSubmit={handleSubmit} style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <label style={{ marginBottom: "20px" }}>
                        Task Name:
                        <br />
                        <input type="text" value={task_name} onChange={handleTaskNameChange} style={{ width: "100%", padding: "10px", marginTop: "10px" }} />
                    </label>

                    <label style={{ marginBottom: "20px" }}>
                        Description:
                        <br />
                        <input type="text" value={description} onChange={handleDescriptionChange} style={{ width: "100%", padding: "10px", marginTop: "10px" }} />
                    </label>

                    <label style={{ marginBottom: "20px" }}>
                        Due Date:
                        <br />
                        <input type="date" value={due_date} onChange={handleDueDateChange} style={{ width: "100%", padding: "10px", marginTop: "10px" }} />
                    </label>

                    <label style={{ marginBottom: "20px" }}>
                        Status:
                        <br />
                        <select value={status} onChange={handleStatusChange} style={{ width: "100%", padding: "10px", marginTop: "10px" }}>
                            <option value="">Select Status</option>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select>
                    </label>

                    <button type="submit" style={{ backgroundColor: "#008CBA", color: "white", padding: "10px", borderRadius: "5px", border: "none", marginTop: "20px" }}>Submit</button>
                </form>

            </div>
        </div>
        </>
    )
};

export default AddTask;