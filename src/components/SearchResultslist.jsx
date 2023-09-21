import React from "react";
import { SearchResult } from "./SearchResult.jsx";
import "./searchResultsList.css";

export const SearchResultslist = ({results}) => {
    return (
    <div className="results-list">
    {results.map((result,id) => {
             <SearchResult result ={result} key={id}/>;

 })}
        


    </div>

    );
    
};