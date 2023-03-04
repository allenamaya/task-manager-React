import React from 'react';

function Footer() {
    return (
        <footer className="bg-light p-3 mt-5 rounded-top">
            <div className="container text-center">
                <p className="m-0">Task Manager &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}

export default Footer;