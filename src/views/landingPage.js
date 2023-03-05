import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";

function LandingPage() {
    return (
        <>
            <Header/>
        <div>
            <h1>Welcome to Your Task Manager</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "inline-block", width: "48%", marginRight: "1%" }}>
                    <Link to="/add-task">
                        <div
                            style={{
                                backgroundColor: "#f1f1f1",
                                borderRadius: "10px",
                                padding: "20px",
                                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                cursor: "pointer",
                            }}
                        >
                            <h2>Add Task</h2>
                            <p>Add a new task to your list</p>
                        </div>
                    </Link>
                </div>
                <div style={{ display: "inline-block", width: "48%", marginLeft: "1%" }}>
                    <Link to="/task-list">
                        <div
                            style={{
                                backgroundColor: "#f1f1f1",
                                borderRadius: "10px",
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
        </div>
        </>
    );
};



export default LandingPage;

