import React, { Component } from 'react';

const SearchList = (props) => {
    const keywordArr = props.keywordArr;
    const tableClass = props.tableClass;
    var keywordList = null;
    if (keywordArr && keywordArr.length > 0) {
        keywordList = props.keywordArr.map((keyword) => {
            return (
                <tr key={keyword}><td>{keyword}</td></tr>
            )
        })
    } else {
        keywordList = null;
    }
    return (
        <table className={tableClass}>
            <tbody>
                    {keywordList}        
            </tbody>    
        </table>
    );
}

export default SearchList;