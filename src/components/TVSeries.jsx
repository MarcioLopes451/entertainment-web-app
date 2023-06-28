import React ,{ useState }from 'react'
import TV from '../../assets/icon-category-tv.svg';
import data from '../../data.json';
import SearchBar from './SearchBar';
import TVSeriesResultsList from '../Results/TVSeriesResultsList';
import BookmarkFull from '../../assets/icon-bookmark-full.svg';
import BookmarkEmpty from '../../assets/icon-bookmark-empty.svg';
import PlayButton from '../../assets/icon-play.svg';


export default function TVSeries() {
    const [results,setResults] = useState([])
  return (
    <div className='movies'>
        <SearchBar placeholder='Search for TV Series' setResults={setResults}/>
        {results && results.length > 0 ? <TVSeriesResultsList results={results}/> :
        <div>
             <h2>TV Series</h2>
             <div className='container'>
        {data.filter(data => data.category === "TV Series").map((data,id) => (
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
