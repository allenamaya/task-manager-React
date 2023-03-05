import React from "react";

const Header = ({ isLoggedIn, onLogout }) => {
    const handleLogout = async () => {
        const response = await fetch("http://your-api-endpoint.com/logout", {
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
        <div>
            <h1>Header</h1>
            {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
        </div>
    );
};

export default Header;
