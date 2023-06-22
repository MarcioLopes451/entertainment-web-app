import React from 'react'
import Movies from '../../assets/icon-category-movie.svg';
import BookmarkFull from '../../assets/icon-bookmark-full.svg';
import BookmarkEmpty from '../../assets/icon-bookmark-empty.svg';
import PlayButton from '../../assets/icon-play.svg';

export default function MovieResultsList({ results }) {
  return (
    <div className='results-container'>
        {results.map((result,id) => (
            <div key={id}>
                {result.title ? <div>
                    {result.category === 'Movie' ? 
                     <div className='recommend-content'>
                     <div className='recommend-image'>
                         <img src={result.thumbnail.regular.large} className='display-img'/>
                         <div className='play-button'>
                                    <div className='play-descripton'>
                                        <img src={PlayButton} />
                                        <p>Play</p>
                                    </div>
                                </div>
                        <div className='bookmark-icon'>
                                {result.isBookmarked ? <img src={BookmarkFull}/> : <img src={BookmarkEmpty}/>}
                                </div>
                         <div className='recommend-details'>
                             <div className='recommend-content'>
                                 <p>{result.year}</p>
                                 <span>•</span>
                                 <p className='recommending'>{result.category === "Movie" ?
                                 <img src={Movies}/>: null 
                                 } {result.category}</p>
                                 <span>•</span>
                                 <p>{result.rating}</p>
                             </div>
                             <div className='recommend-title'>
                                 <h4>{result.title}</h4>
                             </div>
                         </div>
                     </div>
                     </div> : null}
                </div> : null}
            </div>
        ))}
    </div>
  )
}