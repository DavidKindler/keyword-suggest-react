import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // return (React.createElement("div", { className: "row" }, React.createElement("h1", null, "It Works!")));
        return (
            <div className="row">
                <h1>It Works!!!</h1>
            </div>
        )
    }
}

//////////////////////////

// function Content() {
//     return (
//             <div className="row">
//                 <h1>And so does this!!!</h1>
//             </div>
//     )
// }

export default Content;