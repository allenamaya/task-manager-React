import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function LandingPage({ user }) {
    const [tasks, setTasks] = useState([]);
    const [allTasks, setAllTasks] = useState([]);

    const user_id = localStorage.getItem('user_id');

    useEffect(() => {
        fetch(`http://localhost:9292/user/tasks/${user_id}`)
            .then((response) => response.json())
            .then((tasks) => {
                console.log(tasks);
                setTasks(tasks);
                setAllTasks(
                    tasks.map((task) => (
                        <div key={task.id} style={{ margin: '1rem 0' }}>
                            <h3>{task.name}</h3>
                            <p>{task.description}</p>
                        </div>
                    ))
                );
            });
    }, []);

    return (
        <div>
            <Header/>
            <main style={{ margin: '2rem auto', maxWidth: '80ch' }}>
                {allTasks.length > 0 ? allTasks : <p>Loading tasks...</p>}
            </main>
            <Footer/>
        </div>
    );
}

export default LandingPage;

