import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Content from './components/component';

class Root extends Component {
    render() {
        // return (React.createElement("div", { className: "container-fluid", id: "master-container" },
            // React.createElement(Content, null)));
        return (
            <div className="container-fluid" id="master-container">
                <Content />
            </div>
        );
    }
}
ReactDOM.render(<Root />, document.getElementById('root'));