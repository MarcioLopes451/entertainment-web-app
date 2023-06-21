import React from 'react';
import data from '../../../data.json';
import Movies from '../../../assets/icon-category-movie.svg';
import TV from '../../../assets/icon-category-tv.svg';
import BookmarkFull from '../../../assets/icon-bookmark-full.svg';
import BookmarkEmpty from '../../../assets/icon-bookmark-empty.svg';
import PlayButton from '../../../assets/icon-play.svg';

export default function Recommended() {
  return (
    <div className='recommend'>
        <p className='recommend-p'>Recommended for you</p>
        <div className='recommend-container'>
            {data.map((data,index) => (
            <div key={index}>
                {!data.isTrending ? 
                <div className='recommend-content'>
                    <div className='recommend-image'>
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
                        <div className='recommend-details'>
                            <div className='recommend-content'>
                                <p>{data.year}</p>
                                <span>•</span>
                                <p className='recommending'>{data.category === "Movie" ?
                                <img src={Movies}/>: <img src={TV}/> 
                                } {data.category}</p>
                                <span>•</span>
                                <p>{data.rating}</p>
                            </div>
                            <div className='recommend-title'>
                                <h4>{data.title}</h4>
                            </div>
                        </div>
                    </div>
                </div> : null}
            </div>
            ))}
        </div>
    </div>
  )
}

