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
                    <a href="https://m.facebook.com/profile.php?id=100063820491585&_rdr">
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='https://myaccount.google.com/?utm_source=account-marketing-page&utm_medium=go-to-account-button&pli=1'>
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href='https://z-p15.www.instagram.com/seuz716/?hl=es-la'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='href="https://www.youtube.com/channel/UCy4U3DhNkBHwytod7fquQVQ"'>
                        <i className='fa fa-youtube-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-twitter'></i>
                    </a>
                    </div>
                </div >
                <div className='profile-details-name'>
                    <span className='primary-text'>
                    {""} Hello, I'M <span className='highlighted-text'>César Andrés </span>
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
                                "Entusiasta Desarrollador 🌇",
                                50 ,
                                "Full Stack  Developer 💻",
                                100,
                                "Desarrollador en React JS 🔢",
                                200,
                                "MERN Stack Dev 🚄",
                                200,
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>Habilidades para construir aplicaciones con operaciones de front-end y back-end.</span>
                   </span>
               </div>
               <div className='profile-options'>
                   
                   <a href= "ResumeEs.pdf" download='ResumeEs.pdf'>
                        <button className='btn btn-primary'>Obten mi CV </button>
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
