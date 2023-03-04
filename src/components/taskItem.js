import React, {useEffect, useState} from 'react'

function TaskItem(){
    const [tasks, setTasks] = useState([]);
    const [allTasks, setAllTasks] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then((tasks) => {
                console.log(tasks)
                setTasks(tasks)
                setAllTasks(
                    tasks.map((task, index) => (
                        <div key={index} style={{marginBottom: "1rem", padding: "1rem", border: "1px solid #ccc"}}>
                            <h2 style={{fontSize: "1.5rem"}}>{task.title}</h2>
                            <p style={{fontSize: "1rem"}}>{task.body}</p>
                        </div>
                    ))
                )
            })
    }, [])

    return (
        <div style={{textAlign: "center", marginTop: "3rem"}}>
            <h1 style={{fontSize: "2rem", marginBottom: "1rem"}}>Tasks</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{maxWidth: "768px"}}>
                    {allTasks}
                </div>
            </div>
        </div>
    )
}

export default TaskItem
