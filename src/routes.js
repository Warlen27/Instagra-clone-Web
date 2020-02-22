import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import New from './pages/New';
import Update from './components/Update';
import Login from './pages/Login'
import Register from './pages/Register';
import Profile from './pages/Profile';
import PrivateRoute from './Auth';
import NotFound from './components/NotFound';


function Routes(){
    return(
          
                <Switch>
                    <Route path="/" exact component={Register} />
                    <Route path="/login"  component={Login} />
                    <PrivateRoute  path="/feed"  component={Feed} />
                    <Route path="/new" component={New} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/update" component={Update} />
                    <PrivateRoute  component={NotFound} />
                </Switch>
              
    );
}

export default Routes;