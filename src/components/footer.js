import React from 'react';

function Footer() {
    const footerStyle = {
        backgroundColor: '#f8f9fa',
        padding: '1rem',
        marginTop: '5rem',
        borderRadius: '0.25rem 0.25rem 0 0',
        textAlign: 'center'
    };

    return (
        <footer style={footerStyle}>
            <div className="container">
                <p style={{ margin: 0 }}>Task Manager &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}

export default Footer;
