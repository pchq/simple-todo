import React, { Component } from "react";

export default class ItemAddForm extends Component {
    state = {
        value: ''
    };
    
    onLabelChange = (e) => {
        this.setState({
            value: e.target.value
        })
    };
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdd(this.state.value);
        
        this.setState({
            value: ''
        })
    };
    
    render(){
        return (
            <form className="input-group mb-3" onSubmit={this.onSubmit}>
                <input
                    className="form-control"
                    type="text"
                    placeholder="What to do?"
                    onChange={this.onLabelChange}
                    value={this.state.value}
                />
                <div className="input-group-append">
                    <button 
                        className="btn btn-primary"
                        type="submit"
                    >
                        Add Item
                    </button>
                </div>
            </form>

        )
    }
}
