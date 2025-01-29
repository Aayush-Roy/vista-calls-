import React from 'react'
import "../App.css";
import {Link} from "react-router-dom";
function landingPage() {
  return (
    <div className='landingPageContainer'>
      <nav>
        <div className="navHeader">
            <div className='logodiv'>
            <img src="/logo.png" alt="" />
            <p className='logoTitle'>VistaCalls</p>
            </div>
        </div>
        <div className="navList">
            <p>Join as Guest</p>
            <p>Register</p>
            <div role='button'>
                <p>Login</p>
            </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1><span style={{color:"#0066FF"}}>Connect</span> with your loved ones</h1>
          <p>Cover a distance by Vista Calls</p>
          <div role='button'>
            <Link to={"/home"}>Get Started</Link>
          </div>
        </div>
        <div>
          <img src="/screen.jpg" alt="" />
        </div>
      </div>

    </div>
  )
}

export default landingPage
