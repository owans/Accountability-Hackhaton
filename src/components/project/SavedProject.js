import React from 'react';
import Header from '../Common/Header/header';
import {Row, Col} from 'react-bootstrap';
import '../../App.css';

const userInfo =[
    {profilePic: ''}, 
    {name: 'John Doe'}, 
    {location: 'Port Harcourt'},
    {savedProjects: '3'}, 
    {shares: '1'},
    {date: new Date}
]

class SavedProjects extends React.Component {
    constructor(props){
        super(props);

        this.state={
            userInfo: []
        }
    }
    render(){
        return(
            <div>
            <Header/>
            <Row className="dash-header">
              <Col>
              <div value={this.state.userInfo.profilePic}></div>

              <div className='firstDetails'>
                <div value={this.state.userInfo.name}>John Doe</div>
                <div className='top'>1</div>
                <div className='top'>2</div>
              </div>

              <div className="secondDetails">
                    <div value={this.state.userInfo.location}>Port Harcourt</div>
                    <div value={this.state.userInfo.savedProjects}>SavedProjects</div>
                    <div value={this.state.userInfo.shares}>Shares</div>
                </div>
                
              </Col>
              {/* <Col>
                    <div className='projectCards card'>
                        <div className='card-body'>
                        <h3 className='card-header'>Saved Projects</h3>
                        <p value={this.state.userInfo.date}></p>
                        <div >

                        </div>
                        </div>
                    </div>
              </Col> */}
            </Row> 
        </div>
        )
    }
}

export default SavedProjects;