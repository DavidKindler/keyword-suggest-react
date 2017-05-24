import React, { Component } from 'react';
import SearchBar from './searchbar';
import SearchList from './searchlist';
import getSearch from './get-search';
import _ from 'lodash';


class KeywordSuggest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: []
        }
        this.runSearch = this.runSearch.bind(this);
    }

    runSearch(term) {
        getSearch(term).then(
            (data) => this.setState( { keywordArr: data })
        );
    }

    render() {
        const keywordSearch = _.debounce((term) => { this.runSearch(term) }, 150);
        return (
        <div>
            <SearchBar onSearchTermChange={keywordSearch} />
            <SearchList keywordArr={this.state.keywordArr} tableClass="table table-borderd table-condensed table-hover" />        
        </div>
        );
    }
}

export default KeywordSuggest;