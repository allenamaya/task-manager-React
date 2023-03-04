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
                        <div key={index} className="card mb-3">
                            <div className="card-body">
                                <h2 className="card-title">{task.title}</h2>
                                <p className="card-text">{task.body}</p>
                            </div>
                        </div>
                    ))
                )
            })
    }, [])

    return (
        <div className="container">
            <h1 className="text-center mt-5 mb-4">Tasks</h1>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {allTasks}
                </div>
            </div>
        </div>
    )
}

export default TaskItem