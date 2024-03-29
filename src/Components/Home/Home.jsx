import React from 'react'
import './home.css'
import video from '../../Assest/video.mp4'
import{GrLocation} from 'react-icons/gr'
import{HiFilter} from 'react-icons/hi'
import{FiFacebook} from 'react-icons/fi'
import{BsInstagram} from 'react-icons/bs'
import{FaTripadvisor} from 'react-icons/fa'
import{AiOutlineUnorderedList} from 'react-icons/ai'
import{TbApps} from 'react-icons/tb'

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

      <div className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor="city">Search your destination</label>
              <div className="input flex">
                <input type="text" placeholder='Enter name here...'/>
                <GrLocation className='icon'/>

              </div>
              <label htmlFor="city">Select your date</label>
                <div className="input flex">
                <input type="date" placeholder='Enter name here...'/>
                </div>
            </div>

            <div className="priceInput">
              <div className="lable_total flex">
                <label htmlFor="price">Max Price:</label>
                <h5 className='total'>$5000</h5>
              </div>
              <div className="input flex">
                <input type='range' max='5000' min='1000'/>
              </div>
            </div>
            <div className="searchOptions flex">
            <HiFilter className="icon"/>
            <span>MORE FILTERS</span>
            </div>
      </div>

      <div className="homeFooterIcons flex">
        <div className="rightIcons">
        <FiFacebook className="icon"/>
        <BsInstagram className="icon"/>
        <FaTripadvisor className="icon"/>
        </div>
        <div className="leftIcons">
        <AiOutlineUnorderedList className="icon"/>
        <TbApps className="icon"/>
        </div>
      </div>
    </div>
      

    </section>
  )
}

export default Home