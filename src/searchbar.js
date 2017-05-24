import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
    }    

    onInputChange (term) {
        this.setState({ term })
        this.props.onSearchTermChange(term);
    }    
    
    render() {
        return (
                 <input 
                    className="form-control" 
                    placeholder="Search..."
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} 
                    />
        );
    }



}

export default SearchBar;