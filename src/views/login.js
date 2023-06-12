import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
      
            body: JSON.stringify({ username, password })
        });
        if (response.ok) {
            // handle successful login
            console.log("Login successful");
            navigate("/home");
        } else {
            // handle failed login
            console.log("Login failed");
            setError("Invalid username or password");
        }
    };

    return (
        <>
        <Header/>
        <div>
            <h1>Welcome to your task manager</h1>
            <h2>Lets get you Logged in</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", marginBottom: "10px" }}>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "100%" }}
                    />
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", marginBottom: "10px" }}>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "100%" }}
                    />
                </div>
                <button
                    type="submit"
                    style={{ backgroundColor: "deepskyblue", color: "white", padding: "12px 20px", border: "none", borderRadius: "10px", cursor: "pointer" }}
                >
                    Submit
                </button>
            </form>
            {error && <div>{error}</div>}
        </div>
        </>
    );
};

export default Login;
