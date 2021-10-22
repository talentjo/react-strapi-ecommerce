import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './components/homepage/homepage.component';
import About from './components/about/about.component';
import Contact from './components/contact/contact.component';
import ShopData  from './components/shopdata/shopdata.component';

import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/about' component={About}/>
          <Route  path='/shop' component={ShopData} />
          <Route  path='/contact' component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;

