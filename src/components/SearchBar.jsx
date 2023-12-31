import React, {useState} from "react";
import Search from '../../assets/icon-search.svg';

export default function SearchBar({placeholder = 'Search for movies or TV series', setResults}) {
const [input, setInput] = useState("");

const fetchData = (value) => {
    fetch('/entertainment-web-app/data.json').then((res) => res.json()).then((json) => {
        const results = json.filter((user) => {
            return (
                value &&
                user &&
                user.title &&
                user.title.includes(value)
            )
        });
        setResults(results)
    })
}

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
      
        return (
                    <div className='search-bar'>
                        <img src={Search}/>
                        <input 
                            type='text'
                            placeholder={placeholder}
                            value={input}
                            onChange={(e) => handleChange(e.target.value)}
                            />
                    </div>
          )
    
  
}
