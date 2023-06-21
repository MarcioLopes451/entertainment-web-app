import React from 'react'
import Logo from '../../../assets/logo.svg';
import Home from '../../../assets/icon-nav-home.svg';
import Movies from '../../../assets/icon-nav-movies.svg';
import TV from '../../../assets/icon-nav-tv-series.svg';
import Bookmark from '../../../assets/icon-nav-bookmark.svg';
import Avatar from '../../../assets/image-avatar.png';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <nav className='side-nav'>
                <img src={Logo} className='logo'/>
                <div className='nav-buttons'>
                <Link to='/entertainment-web-app/'><img src={Home}/></Link>
                <Link to='/entertainment-web-app/movies'><img src={Movies}/></Link>
                <Link to='/entertainment-web-app/tvseries'><img src={TV}/></Link>
                <Link to='/entertainment-web-app/bookmarked'><img src={Bookmark}/></Link>
                </div>
                <div className='avatar'>
                <img src={Avatar}/>    
                </div>
            </nav>
        </div>
    </div>
  )
}
