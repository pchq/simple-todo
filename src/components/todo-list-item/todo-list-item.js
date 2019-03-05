import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({label, onDeleted, onToggleImportant, onToggleDone, done, important}) => {

    let className = 'todo-list-item__text';
    let btnImportantClass = 'btn-outline-success';

    if (done) {
        className += ' is-done';
    }
    if (important) {
        className += ' font-weight-bold text-primary';
        btnImportantClass = 'btn-success';
    }

    return (
        <span className="todo-list-item d-flex justify-content-between align-items-center">
                <span
                    className={className}
                    onClick={onToggleDone}
                >
                    {label}
                </span>
                
                <span className="btn-group todo-list-item__btns">
                    <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={onDeleted}
                    >
                        <i className="fa fa-trash-o"/>
                    </button>
                    <button
                        className={`btn ${btnImportantClass} btn-sm`}
                        onClick={onToggleImportant}
                    >
                        <i className="fa fa-exclamation"/>
                    </button>
                </span>
            </span>
    )
};

export default TodoListItem;