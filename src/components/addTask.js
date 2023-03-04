import React from 'react';

function AddTask() {
    return (
        <div className="container mt-5">
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" rows="3" placeholder="Description"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select className="form-control" id="status">
                        <option value="">Select a status</option>
                        <option value="todo">To Do</option>
                        <option value="inprogress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" className="form-control" id="date" placeholder="Date" />
                </div>
                <div className="form-group">
                    <label htmlFor="dueDate">Due Date</label>
                    <input type="date" className="form-control" id="dueDate" placeholder="Due Date" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddTask;
