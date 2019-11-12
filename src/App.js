import React from 'react';
import Home from '../src/components/Home/home';
import SignIn from '../src/components/SignIn/signin';
import SigninWithEmail from './components/SignIn/SignUpWithEmail'
import SigninWithMailConfirm from './components/SignIn/ConfirmEmail'
import SavedProject from './components/project/SavedProject'
import NoMatch from '../src/components/NotFound/404';
import { Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signin-mail' component={SigninWithEmail} />
        <Route exact path='/signin-mail-confirm' component={SigninWithMailConfirm } />
        <Route exact path="/saved-project" component={SavedProject} />
        <Route component={NoMatch}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
