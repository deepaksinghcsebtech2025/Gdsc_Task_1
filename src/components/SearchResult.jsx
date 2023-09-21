import React from 'react'
import { SearchResultslist } from './SearchResultslist';
import "./SearchResult.css";

export const SearchResult = ({result}) => {
  return 
    <div className="search-result" onClick={(e) => alert('you clicked on ${result.name}')}>{result.name}</div>;
  
};
