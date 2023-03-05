import React from "react";

const Header = ({ isLoggedIn, onLogout }) => {
    const handleLogout = async () => {
        const response = await fetch("http://127.0.0.1:9292/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.ok) {
            // handle successful logout
            onLogout();
            console.log("Logout successful");
        } else {
            // handle failed logout
            console.log("Logout failed");
        }
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'black',
            padding: '10px'
        }}>
            <h1 style={{ margin: 0, color: "white" }}>Task Manager</h1>
            {isLoggedIn && (
                <button style={{
                    backgroundColor: '#2ECC71',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '10px 20px',
                    cursor: 'pointer'
                }} onClick={handleLogout}>Logout</button>
            )}
        </div>
    );
};

export default Header;
