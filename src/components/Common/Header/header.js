import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div>
            <nav
              className="navbar navbar-expand-lg fixed-top border-bottom navbar-light"
              style={{ backgroundColor: "#0B273D" }}
            >
              <div className="container">
                <div className=" col-sm d-flex justify-content-start">
                  <Link to="/" style={{textDecoration: "none"}}>
                    <span
                      className="align-middle"
                      style={{
                        color: "#ffffff",
                        fontSize: 25,
                        fontFamily: "Varela Round"
                      }}
                    >NDDC Tracker
                    </span>
                  </Link>
                </div>
                <form className='form-inline mt-3 mt-md-0'>
              <input className='form-control mr-sm-2' type='text' placeholder='Search' aria-label='Search' />
              <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
                Search
              </button>
            </form>
                <div style={{ fontFamily: "Varela Round" }}>
                  <button
                    type="button"
                    className="btn text-white"
                    style={{ fontSize: 16 }}
                  >
                    Categories
                  </button>
                </div>

                <Link to='/saved-project'>
                <div style={{ fontFamily: "Varela Round" }}>
                  <button
                    type="button"
                    className="btn text-white"
                    style={{ fontSize: 16 }}
                  >
                    Dashboard
                  </button>
                </div>
                </Link>
    
                <Link to='/signin' style={{textDecoration: "none"}}>
                <div style={{ fontFamily: "Varela Round" }}>
                  <button
                    type="button"
                    className="btn text-white"
                    style={{ fontSize: 16 }}
                  >
                    Sign In
                  </button>
                </div>
                </Link>
    
                <div style={{ fontFamily: "Varela Round" }}>
                  <button
                    type="button"
                    className="btn text-white"
                    style={{ fontSize: 16 }}
                  >
                    Register
                  </button>
                </div>
    
                
              </div>
            </nav>
          </div>
        )
    }
}

export default Header;