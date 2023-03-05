import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div>
            <h1>Welcome to Your Task Manager</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Link to="/add-task">
                    <div
                        style={{
                            backgroundColor: "#f1f1f1",
                            borderRadius: "10px",
                            width: "30%",
                            padding: "20px",
                            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                            cursor: "pointer",
                        }}
                    >
                        <h2>Add Task</h2>
                        <p>Add a new task to your list</p>
                    </div>
                </Link>
                <Link to="/task-list">
                    <div
                        style={{
                            backgroundColor: "#f1f1f1",
                            borderRadius: "10px",
                            width: "30%",
                            padding: "20px",
                            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                            cursor: "pointer",
                        }}
                    >
                        <h2>Task List</h2>
                        <p>View your current tasks</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};



export default LandingPage;

