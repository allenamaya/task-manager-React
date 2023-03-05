import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
    const [user_info, setUserInfo] = useState();
    const navigate = useNavigate();

    function login(e) {
        e.preventDefault();
        fetch('http://127.0.0.1:9292/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user_info),
        })
            .then((response) => response.json())
            .then((data) => {
                setUser(data);
                localStorage.setItem('user_id', `${data.id}`);
                navigate('/');
            });
    }

    function onchange(e) {
        setUserInfo({ ...user_info, [e.target.name]: e.target.value });
    }

    return (
        <div style={{ marginTop: '5rem' }}>
            <form onSubmit={login} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
                        Email address
                    </label>
                    <input type="email" id="email" placeholder="Enter your email" name="email" onBlur={onchange} style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid gray', width: '100%', maxWidth: '20rem' }} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>
                        Password
                    </label>
                    <input type="password" id="password" placeholder="Enter your password" name="password" onBlur={onchange} style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid gray', width: '100%', maxWidth: '20rem' }} />
                </div>
                <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem', border: 'none' }}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
