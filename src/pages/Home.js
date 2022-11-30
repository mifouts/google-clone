import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from "@material-ui/icons/Apps";

function Home() {
  return (
    <div className='home'>

      <div className="home__header">
        <div className="header__headerLeft">
            <Link to ='/about'>About</Link>
            <Link to ='/store'>Store</Link>
        </div>
        <div className="header__headerRight">
            <Link to ='/gmail'>Gmail</Link>
            <Link to ='/images'>Images</Link>
            <AppsIcon />
        </div>
      </div>
      <div className="home__body"></div>
      </div>
  )
}

export default Home