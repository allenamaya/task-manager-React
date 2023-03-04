import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ setUser }) {
    const [user_info, setUserInfo] = useState()
    const navigate = useNavigate()

    function login(e) {
        e.preventDefault()
        fetch("http://localhost:9292/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user_info)
        })
            .then(response => response.json())
            .then(data => {
                setUser(data)
                localStorage.setItem('user_id', `${data.id}`)
                navigate('/')
            })
    }

    function onchange(e) {
        setUserInfo({ ...user_info, [e.target.name]: e.target.value })
    }

    return (
        <div className="container mt-5">
            <form onSubmit={login}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email" onBlur={onchange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" name="password" onBlur={onchange} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login