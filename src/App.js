import React from 'react';
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';
import SignUpMail from './components/pages/SignUpMail';
import ConfirmMail from './components/pages/ConfirmMail';
import SavedProject from './components/pages/SavedProject';
import SearchPage from './components/pages/SearchPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<Router>
			<Route exact path="/" component={Home} />
			<Route exact path="/signin" component={SignIn} />
			<Route exact path="/signup-mail" component={SignUpMail} />
			<Route exact path="/signup-mail-confirm" component={ConfirmMail} />
			<Route exact path="/dashboard" component={SavedProject} />
			<Route exact path="/search" component={SearchPage} />
		</Router>
	);
}

export default App;
