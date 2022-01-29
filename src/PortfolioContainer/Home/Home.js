import React from 'react';
import Profile from './Profile/Profile';
import './Home.css';
import Footer from './Footer/Footer';



export default function Home() {
  return (
        <div className='home-container'>
          
          <Profile /> 
          <Footer/>
           
           
        </div>
  
  );
}
