import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import KeywordSuggest from './keyword-suggest';

export default class App extends Component {
    render() {
        return (
            <KeywordSuggest />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));