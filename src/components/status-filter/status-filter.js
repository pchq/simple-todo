import React, {Component} from 'react';


export default class StatusFilter extends Component {

    buttons = [
        {name: 'all', title: 'All'},
        {name: 'active', title: 'Active'},
        {name: 'important', title: 'Important'},
        {name: 'done', title: 'Done'},
    ];

    render() {
        const buttons = this.buttons.map(({name, title}) => {
            let className = 'btn';
            className += this.props.currFilter === name ? ' btn-primary' : ' btn-secondary';
            return (
                <button
                    type="button"
                    className={className}
                    key={name}
                    onClick={() => this.props.onFilter(name)}
                >
                    {title}
                </button>
            )
        });
        return (
            <div className="btn-group" role="group">
                {buttons}
            </div>
        )
    }
}
