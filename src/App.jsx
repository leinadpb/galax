import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Providers
import AuthProvider from './providers/AuthProvider';

// Services
import AuthService from './services/AuthService';

// Components
import Header from './components/Header';
import Login from './components/Login';
import Plants from './components/Plants';

// Others
import * as ROUTES from './constants/Routes';

class App extends Component {
  render() {
    return (
      <AuthProvider.Provider value={new AuthService()}>
        <Router>
          <div>
            <Header />
            <Route exact path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.PLANTS} component={Plants} />
          </div>
        </Router>
      </AuthProvider.Provider>
    );
  }
}

export default App;
