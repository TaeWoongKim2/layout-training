import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';

import {
  About,
  Contact,
  Home,
  Portfolio,
  Skills,
} from './routers';

function App() {
  return (
    <>
      <Header />
      <article className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </article>
    </>
  );
}

export default App;
