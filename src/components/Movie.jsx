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
         <div className='movies-container'>
         {data.map((data,index) => (
             <div key={index}>
                 {data.category === 'Movie' ? 
                 <div className='movie-content'>
                 <div className='movie-image'>
                     <img src={data.thumbnail.regular.large} className='display-img'/>
                     <div className='play-button'>
                                    <div className='play-descripton'>
                                        <img src={PlayButton} />
                                        <p>Pla</p>
                                    </div>
                                </div>
                        <div className='bookmark-icon'>
                                {data.isBookmarked ? <img src={BookmarkFull}/> : <img src={BookmarkEmpty}/>}
                                </div>
                     <div className='movie-details'>
                         <p>{data.year}</p>
                         <span>•</span>
                         <p className='movie-icon'>{data.category === "Movie" ?
                         <img src={Movies}/>: null 
                         }{data.category}</p>
                         <span>•</span>
                         <p>{data.rating}</p>
                     </div>
                     <div className='movie-title'>
                     <h4>{data.title}</h4>
                 </div>
                 </div>
             </div> : null}
             </div>
         ))}
     </div>
         </div>
        }
       
    </div>
    
  )
}