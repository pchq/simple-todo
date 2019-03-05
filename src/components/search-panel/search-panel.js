import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchTap = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearch(term);
    };

    render() {
        return <input
            className="form-control search-panel"
            type="text"
            placeholder="Search"
            onChange={this.onSearchTap}
            value={this.state.term}
        />
    }
}
