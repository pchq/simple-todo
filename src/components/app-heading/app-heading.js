import React from 'react';

import './app-heading.css';

const AppHeading = ( {toDo, done} ) => {
    return (
        <div className="d-flex justify-content-between align-items-baseline app-heading">
            <h1>ToDo List</h1>
            <h6><strong className="text-danger">{toDo}</strong> more to do, <strong className="text-success">{done}</strong> done</h6>
        </div>
    )
};

export default AppHeading;