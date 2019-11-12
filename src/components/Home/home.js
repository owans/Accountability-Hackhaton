import React from 'react';
import Header from '../Common/Header/header';
import Footer from '../Common/Footer/footer';
import Body from '../MainBody/body';

class Home extends React.Component{
    render(){
        return(
            <div>
            <Header/>
            <Body/>
            <Footer/>
            
            </div>
        )
    }
}

export default Home;