import React from 'react';
import Typewriter from 'typewriter-effect';
import image from '../../../images/tuhin1.png'


import './header.css'

const Header = () => {
   
    return (
        <div className="header">
            
           

            <div className="container">
                <div className="row align-items-center">
                <div className="col-md-5">
                        <div className="header-img shadow-lg   bg-body rounded">
                        <img src={image}></img>
                        </div>
                    </div>
                    
                    <div className="col-md-7">
                        <div className="header-content"  data-aos="fade-left">
                            <h1 >
                                HI!<br></br>
                                I AM 
                                Md.OMAR FARUK <span style={{color:"rgb(214, 129, 16)"}}>KHAN</span>
                               
                            </h1>
                            <h6 style={{color:"rgb(214, 129, 16)"}}>
                            <Typewriter
                                    options={{
                                        strings: [' Front End Web Developer'],
                                        autoStart: true,
                                        loop: true,
                                        
                                    }}
                                />
                            </h6>
                            <p>I can Design and Develop web Applications with Nit and Clean Code</p>

                            <a href="https://drive.google.com/file/d/1Xfsnw4wmXy3kPilB02aJE58u_Sn_28It/view?usp=sharing" target="_blank"><button className="btn btn-danger">Download Resume</button></a>
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>
    );
};

export default Header;