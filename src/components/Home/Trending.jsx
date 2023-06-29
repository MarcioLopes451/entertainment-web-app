import React from 'react'
import data from '../../../data.json'
import Movies from '../../../assets/icon-category-movie.svg';
import TV from '../../../assets/icon-category-tv.svg';
import BookmarkFull from '../../../assets/icon-bookmark-full.svg';
import BookmarkEmpty from '../../../assets/icon-bookmark-empty.svg';
import PlayButton from '../../../assets/icon-play.svg';

export default function Trending() {
  return (
    <>
    <p className='trending'>Trending</p>
    <div className='trending-container'>
        {data.filter(data => data.isTrending === true).map((data,id) => (
          <div key={id} className='trending-content'>
            <div className='trending-img'>
              <img src={data.thumbnail.regular.large} className='display-img1'/>
              <div className='play-button1'>
                <div className='play-descripton1'>
                  <img src={PlayButton} />
                  <p>Play</p>
                </div>
              </div>
              <div className='bookmark-icon1'>
                {data.isBookmarked ? <img src={BookmarkFull}/> : <img src={BookmarkEmpty}/>}
              </div>
              <div className='trending-info'>
              <div className='trending-info1'> 
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
            </div>
        ))}
      </div>
      </>
  )
  
}

