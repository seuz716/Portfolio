import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
  return(
   
    <div className='profile-container' >
        <div className='profile-parent' >
            <div className='profile-details' >
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='#'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-youtube-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-twitter'></i>
                    </a>
                    </div>
                </div >
                <div className='profile-details-name'>
                    <span className='primary-text'>
                    {""} Hello, I'M <span className='highlighted-text'>César </span>
                    </span>
                </div>
               <div className='profile-details-role'>
                   <span className='primary-text'>
                        {""}
                        <h1>
                            {""}
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Ethusiastic Dev 🌇",
                                1000 ,
                                "Full Stack  Developer 💻",
                                1000,
                                "React Dev 🔢",
                                1000,
                                "MERN Stack Dev 🚄",
                                1000,
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>Knack of Building applications with front and backend operations.</span>
                   </span>
               </div>
               <div className='profile-options'>
                   <button className='btn primary-btn'>
                       {""}
                       Hire Me {""}
                   </button>
                   <a href= "ResumeEs.pdf" download='ResumeEs.pdf'>
                        <button className='btn highlighted-btn'>Get Resumen </button>
                   </a>
               </div>
            </div >
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
 
            </div>
        </div>    
    </div>
  );
  
}
