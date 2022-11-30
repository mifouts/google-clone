import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';



function Home() {
  return (
    <div className='home'>

      <div className="home__header">
        <div className="home__headerLeft">
            <Link to ='/about'>About</Link>
            <Link to ='/store'>Store</Link>
        </div>
        <div className="home__headerRight">
            <Link to ='/gmail'>Gmail</Link>
            <Link to ='/images'>Images</Link>
            <AppsIcon />
            <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img src="https://cdn.mos.cms.futurecdn.net/rjqJEKv6P9Yjy9d3KMGvp8-970-80.jpg.webp" alt="" />
      </div>
      </div>
  )
}

export default Home