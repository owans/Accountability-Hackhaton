import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return(
            <footer className='footer mt-auto py-3 bg-dark text-white' style={{ backgroundColor: "#707070" }}>
        <div>
          <div className="row">
            <div className="col-sm">
              {" "}
              <div className="col-sm-auto d-flex justify-content-start mt-5">
                <Link to="/">
                  <span
                    className="container"
                    style={{
                      color: "#ffffff",
                      fontSize: 20,
                      fontFamily: "Varela Round"
                    }}
                  >
                    NDDC Tracker
                  </span>
                </Link>
              </div>
              <p className='container mt-5' style={{color: '#ffffff'}}> © 2019 NDDC Tracker</p>
            </div>
            <div className="col-sm-auto">
              
              <div
                className="nav flex-column text-center"
                style={{ fontFamily: "Montserrat" }}
              >
                <Link to="" className="mt-3 my-1" style={{ color: "#ffffff" }}>
                  <p>About</p>
                </Link>
                <Link to="" className="my-1" style={{ color: "#ffffff" }}>
                  <p>Projects</p>
                </Link>
                <Link to="" className="my-1" style={{ color: "#ffffff" }}>
                  <p>Contacts</p>
                </Link>
                <Link to="" className="my-1" style={{ color: "#ffffff" }}>
                  <p>Terms and Conditions</p>
                </Link>
              </div>
              <div
                className="flex-column text-center"
                style={{ color: "#ffffff" }}
              >
                <button type="button" className="btn text-warning p-2">
                  <i className="fab fa-facebook" style={{color: '#ffffff'}}/>
                </button>{" "}
                <button type="button" className="btn text-warning p-2">
                  <i className="fab fa-instagram" style={{color: '#ffffff'}}/>
                </button>
                <button type="button" className="btn text-warning p-2">
                  <i className="fab fa-twitter-square" style={{color: '#ffffff'}} />
                </button>
              </div>
            </div>
            <div className="col-sm-auto">
              <h6
                className="mt-5 text-center"
                style={{ fontFamily: "Varela Round", color: "#ffffff" }}
              >
                #24 Lorem Street, Port Harcourt. <span><b> +234000000000000 </b></span> <span><b>help@nddctracker.com</b></span>
              </h6>
            </div>
          </div>
        </div>
      </footer>
        )
    }
}

export default Footer;