import React from 'react'
import './home.css'
import video from '../../Assest/video.mp4'

const Home = () => {
  return (
    <section className='home'>
      <div className="overlay"></div>
        <h1>We Give our 100% Customer Service For You</h1>
        <video src={video} muted autoPlay loop type='video/mp4' className='video1'></video>

    <div className="homeContent container">
      <div className="textDiv">
        <span className="smallText">
          Our Packages
        </span>
       <h1 className="homeTitle">
        Search Your Holidays
       </h1>
      </div>
    </div>
      

    </section>
  )
}

export default Home