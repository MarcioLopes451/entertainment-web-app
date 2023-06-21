import React, {useState} from "react";
import Search from '../../assets/icon-search.svg';

export default function SearchBar({placeholder = 'Search for movies or TV series', setResults}) {
const [input, setInput] = useState("");

const fetchData = (value) => {
    fetch('../../data.json').then((res) => res.json()).then((json) => {
        const results = json.filter((user) => {
            return (
                value &&
                user &&
                user.title &&
                user.title.toLowerCase().includes(value)
            )
        });
        setResults(results)
    })
}

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
      const onSubmit = (e) => {
        e.preventdefault()
      }
        return (
                    <div className='search-bar'>
                        <img src={Search}/>
                        <form onSubmit={onSubmit}>
                        <input 
                            type='text'
                            placeholder={placeholder}
                            value={input}
                            onChange={(e) => handleChange(e.target.value)}
                            />
                        </form>
                    </div>
          )
    
  
}
