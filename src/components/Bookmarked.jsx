import React ,{useState}from 'react';
import TV from '../../assets/icon-category-tv.svg';
import data from '../../data.json';
import Movies from '../../assets/icon-category-movie.svg';
import SearchBar from './SearchBar';
import BookmarkedResultsList from '../Results/BookmarkedResultsList';
import BookmarkFull from '../../assets/icon-bookmark-full.svg';
import BookmarkEmpty from '../../assets/icon-bookmark-empty.svg';
import PlayButton from '../../assets/icon-play.svg';

export default function Bookmarked() {
    const [results,setResults] = useState([])
  return (
    <div className='movies'>
        <SearchBar placeholder='Search for Bookmarks' setResults={setResults}/>
        {results && results.length > 0 ? <BookmarkedResultsList results={results}/> :
        <div>
            <h2>Bookmarked Movies</h2>
    <div className='movies-container'>
        {data.map((data,index) => (
            <div key={index}>
               {data.isBookmarked ? 
               <div>
                 {data.category === 'Movie' ? 
                    <div className='movie-content'>
                    <div className='movie-image'>
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
               </div> : null}
               </div>
        ))}
    </div>
    <h2 className='book'>Bookmarked TV Series</h2>
    <div className='movies-container'>
        {data.map((data,index) => (
            <div key={index}>
                {data.isBookmarked ? 
                <div>
                    {data.category === 'TV Series' ? 
                <div className='movie-content'>
                <div className='movie-image'>
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
                    <div className='movie-details'>
                        <p>{data.year}</p>
                        <span>•</span>
                        <p className='movie-icon'>{data.category === "TV Series" ?
                        <img src={TV}/>: null 
                        }{data.category}</p>
                        <span>•</span>
                        <p>{data.rating}</p>
                    </div>
                    <div className='movie-title'>
                    <h4>{data.title}</h4>
                </div>
                </div>
            </div> : null}
                </div> : null}
            </div>
        ))}
    </div>
        </div>
        }
</div>
  )
}
