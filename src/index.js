import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar';
import SearchList from './searchlist';
import gsaSearch from './search-fetch';
import _ from 'lodash';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: []
        }
    }

    keywordSearch(term) {
        let self = this;
        self.setState({ keywords: []   }) 
        gsaSearch(term).then(function (data) {
            
                let titleResult =  data.GSP.RES.R.map(function (arr) {
                        return arr;
                })
               
                self.setState(function () {
                    return {
                     keywordArr: titleResult
                    }
                }) 
            

            });
    }
    
    render() {
        const keywordSearch = _.debounce((term) => { this.keywordSearch(term) }, 200);
        return (
        <div>
            <SearchBar onSearchTermChange={keywordSearch} />
            <SearchList  keywordArr={this.state.keywordArr}/>        
        </div>
        );
    }
}

ReactDOM.render(
    <App />
  , document.getElementById('root'));