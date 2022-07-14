import React from 'react'
import '../styles/Home.css'
// import Menu from './pages/Menu';
import {Link} from 'react-router-dom';
// import bgimage from '../assets/bg2.jpg'

function Home() {
  return (
    <div className='home'>
      <div className="header-container" 
      // style={{backgroundImage: `url(${bgimage})`}}
      >
        <h1>Welcome to our Pizza Store</h1>
        <p className='slogan'>Order Delicious Pizzaaa now!!!!</p>
        <div className="button">
        <Link to="/menu"><button>Order</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Home;