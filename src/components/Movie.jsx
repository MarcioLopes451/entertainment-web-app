import React , {useState}from 'react';
import data from '../../data.json'
import Movies from '../../assets/icon-category-movie.svg';
import SearchBar from './SearchBar';
import MovieResultsList from '../Results/MovieResultsList';
import BookmarkFull from '../../assets/icon-bookmark-full.svg';
import BookmarkEmpty from '../../assets/icon-bookmark-empty.svg';
import PlayButton from '../../assets/icon-play.svg';

export default function Movie({}) {
    const [results, setResults] = useState([]);
  return (
    <div className='movies'>
        <SearchBar setResults={setResults} placeholder='Search for Movies'/>
        {results && results.length > 0 ? 
        <div>
            <h1></h1>
            <MovieResultsList results={results}/>
        </div>: 
         <div>
            <h2>Movies</h2>
            <div className='container'>
        {data.filter(data => data.category === 'Movie').map((data,id) => (
          <div key={id} className='container-content'>
            <div className='container-img'>
              <img src={data.thumbnail.regular.large} className='display-img'/>
              <div className='play-button'>
                <div className='play-descripton'>
                  <img src={PlayButton} />
                  <p>Play</p>
                </div>
              </div>
              <div className='bookmark-icon'>
                {data.isBookmarked ? <img src={BookmarkFull}/> : <img src={BookmarkEmpty}/>}
              </div>
            </div>
            <div className='recommend-info'>
              <div className='recommend-info1'> 
              <p>{data.year}</p>
              <span>•</span>
              <p className='recommending'>{data.category === "Movie" ?
              <img src={Movies}/>: <img src={TV}/>} {data.category}</p>
              <span>•</span>
              <p>{data.rating}</p>
              </div>
              <p className='content-title'>{data.title}</p>
              </div>
            </div>
        ))}
      </div>
         </div>
        }
       
    </div>
    
  )
}