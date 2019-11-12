import React from 'react';
import Background from '../../assets/img/component1.png';
import Image1 from '../../assets/img/component2.png';
import Image2 from '../../assets/img/component3.png';
import '../MainBody/styles.css';

class Body extends React.Component{
    render(){
        return(
            <div>
                
                <div className='MyImage'>
                    <img 
                    src={Background}
                    width= '100%'
                    height= '400px'
                    alt='bodyImage'/>
                    <p className='imageText'>We're creating a new level of transparency by <b></b>increasing civic participation in projects</p>
                </div>
                    <div class='sectionImages'>
                        <img
                        src={Image1}
                        width='50px'
                        height='50px'
                        alt='squareImage'
                        />
                    </div>
                    <div class='sectionImages'>
                        <img
                        src={Image2}
                        width='50px'
                        height='50px'
                        alt='squareImage2'
                        />
                    </div>
                    <div class='sectionImages'>
                    <img
                    src={Image2}
                    width='50px'
                    height='50px'
                    alt='squareImage3'
                    />
                    </div>
            </div>
        )
    }
}

export default Body;