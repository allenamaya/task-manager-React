import React from 'react';

function AddTask() {
    return (
        <div style={{margin: '50px auto', maxWidth: '500px'}}>
            <form>
                <div style={{marginBottom: '20px'}}>
                    <label htmlFor="name" style={{display: 'block', marginBottom: '5px'}}>Name</label>
                    <input type="text" style={{padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%'}} id="name" placeholder="Name" />
                </div>
                <div style={{marginBottom: '20px'}}>
                    <label htmlFor="description" style={{display: 'block', marginBottom: '5px'}}>Description</label>
                    <textarea style={{padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%'}} id="description" rows="3" placeholder="Description"></textarea>
                </div>
                <div style={{marginBottom: '20px'}}>
                    <label htmlFor="status" style={{display: 'block', marginBottom: '5px'}}>Status</label>
                    <select style={{padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%'}} id="status">
                        <option value="">Select a status</option>
                        <option value="todo">To Do</option>
                        <option value="inprogress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div style={{marginBottom: '20px'}}>
                    <label htmlFor="date" style={{display: 'block', marginBottom: '5px'}}>Date</label>
                    <input type="date" style={{padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%'}} id="date" placeholder="Date" />
                </div>
                <div style={{marginBottom: '20px'}}>
                    <label htmlFor="dueDate" style={{display: 'block', marginBottom: '5px'}}>Due Date</label>
                    <input type="date" style={{padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%'}} id="dueDate" placeholder="Due Date" />
                </div>
                <button type="submit" style={{padding: '10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', border: 'none', width: '100%'}}>Submit</button>
            </form>
        </div>
    )
}

export default AddTask;

