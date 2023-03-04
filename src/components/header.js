import React from 'react'
import { NavLink } from 'react-router-dom'

function Header(){
    const linkStyle = {
        color: '#000',
        textDecoration: 'none',
        margin: '0 10px',
        fontWeight: 'bold'
    }

    return (
        <nav style={{backgroundColor: '#fff', padding: '10px 0'}}>
            <div style={{width: '100%', maxWidth: '1200px', margin: '0 auto'}}>
                <NavLink style={{marginRight: 'auto', fontWeight: 'bold', fontSize: '24px', color: '#000', textDecoration: 'none'}} className="navbar-brand" to="/">My App</NavLink>
                <div style={{display: 'flex'}}>
                    <NavLink style={linkStyle} activeClassName="active" to="/" exact>Home</NavLink>
                    <NavLink style={linkStyle} activeClassName="active" to="/tasks">All tasks</NavLink>
                    <NavLink style={linkStyle} activeClassName="active" to="/addtasks">New Tasks</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Header
