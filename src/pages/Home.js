import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import Flower from "../assests/desktop-wallpaper-background-aesthetic-flowers-cool-aesthetic-flower.jpg";
import History from "../assests/Karl_Brullov_-_The_Last_Day_of_Pompeii_-_Google_Art_Project.jpg";
import Typo from "../assests/screenshot.webp";

function Home() {
  return (
    <div className='home' style={{ backgroundColor: '#121619' }}>
      <div className='headerContainer'>
        <h1>ExpressWay, Express Wisdom</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Link to="/create">
          <button>Get Started</button>
        </Link>
      </div>
      <Carousel fade>
        <Carousel.Item>
          <img src={Flower} className="d-block w-100 img-fluid" alt="Flower" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={History} className="d-block w-100 img-fluid" alt="History" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Typo} className="d-block w-100 img-fluid" alt="Typo" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
