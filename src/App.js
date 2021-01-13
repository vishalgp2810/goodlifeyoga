import React from 'react';
import './App.css';
import Header from './Header';
import Slider from './Slider';
import RecomendedVideo from './RecomendedVideo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SerchPage from './SerchPage';
import Liveclasse from './liveclasse';
import RegisterFrom from './RegisterModal';
import Homepage from './Homepage';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' >
            <Homepage />
          </Route>
          <Route path='/about'>
            <Liveclasse />
          </Route>
          <Route path='/register' >
            <RegisterFrom />
          </Route>
          <Route path='/search/:searchTerm'>
            <div className='app_page'>
              <Slider />
              <SerchPage />
            </div>
          </Route>
          <Route>
            <div className='app_page'>
              <Slider />
              <RecomendedVideo />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
