import { useState } from "react";


import "./App.css"
import { SearchBar } from './components/SearchBar';
import { SearchResultslist } from "./components/SearchResultslist";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
    <div className='Search-Bar-Container'>
      <SearchBar setResults={setResults}/>
      <SearchResultslist results={results} />
     
      </div>
    </div>
  );
}

export default App;
