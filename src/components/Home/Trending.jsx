import React from 'react'
import data from '../../../data.json'
import Movies from '../../../assets/icon-category-movie.svg';
import TV from '../../../assets/icon-category-tv.svg';
import BookmarkFull from '../../../assets/icon-bookmark-full.svg';
import BookmarkEmpty from '../../../assets/icon-bookmark-empty.svg';
import PlayButton from '../../../assets/icon-play.svg';


export default function Trending() {
  return (
    <div className='trending'>
        <p>Trending</p>
        <div className='trending-container'>
            {data.map((data, index) => (
                    <div
                    key={index}
                    >
                        {data.isTrending ? 
                        <div className='content'>
                            <div className='content-image'>
                                <img src={data.thumbnail.trending.large} className='display-img1'/>
                                <div className='play-button1'>
                                    <div className='play-descripton1'>
                                        <img src={PlayButton} />
                                        <p>Play</p>
                                    </div>
                                </div>
                        <div className='bookmark-icon1'>
                                {data.isBookmarked ? <img src={BookmarkFull}/> : <img src={BookmarkEmpty}/>}
                                </div>
                                <div className='content-details'>
                                    <div className='main-content'>
                                            <p>{data.year}</p>
                                            <p className='category'>{data.category === "Movie" ?
                                            <img src={Movies}/>: <img src={TV}/> 
                                            } {data.category}</p>
                                            <p>{data.rating}</p>    
                                    </div>
                                    <div className='content-title'>
                                        <p>{data.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null}
                     </div>
                ))
            }
        </div>
    </div>
  )
  
}
