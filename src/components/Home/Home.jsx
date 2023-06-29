import React , {useState}from 'react';
import Trending from './Trending';
import Recommended from './Recommended';
import SearchBar from '../SearchBar';
import { SearchResultsList } from '../../Results/SearchResultsList';

export default function Home() {
    const [results, setResults] = useState([]);

return (
    <div className='home'>
        <div className='home-container'>
            <SearchBar setResults={setResults}/>
            {results && results.length > 0 ? <SearchResultsList results={results}/> :<>
            <Trending />
            <Recommended />
            </> }
            
        </div>
        
    </div>
)
}
