import React, { Component } from 'react';

const SearchList = (props) => {
    const keywordArr = props.keywordArr;
    var keywordList =<tr><td></td></tr>; 
    if (keywordArr) {
        keywordList = props.keywordArr.map((keyword) => {
           var regex = /(<([^>]+)>)/ig
            ,  title = keyword.T.replace(regex, "");
            return (
                <tr key={keyword.N}><td>{title}</td></tr>
            )
        })
    } else {
        keywordList = <tr><td></td></tr>;
    } 
    return (
            <div>
                <table className="table table-borderd table-compressed">
                <tbody>
                    {keywordList}        
                </tbody>    
                </table>
            </div>
    );
}

export default SearchList;