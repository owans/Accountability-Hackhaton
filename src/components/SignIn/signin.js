import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Common/Header/header';
import imgf from '../../assets/img/imgf.png';
import imgG from '../../assets/img/imgG.png';




class SignIn extends React.Component{
    render(){
        return(
            <div className='mt-5'>
                <Header/>
              <div className="signup-container"> 
              <h3 className='mt-5 mb-5 text-center'>Sign In to read and Write Feedback</h3>
                <div className="social-btn mb-3">
                    <img src={imgf}   alt="facebook image"/>
                    <p className="social-txt"> Continue with Facebook </p>
                  </div> 
                     
                <div className="social-btn mb-3">
                <img src={imgG} style={{width: '60px', height: '60px', padding: '10px'}} alt="google image"/>
                  <p className="social-txt mr-5">Continue with Google</p>
                </div>
                
                <Link to='/continueWithEmail'>
                  <p className='mt-3'>Continue With Email</p>
                </Link>
              </div>
    
            </div>
        )
       
    }
}

export default SignIn;