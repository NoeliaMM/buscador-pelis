import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'

import {Home} from './pages/Home'
import {Detail} from './pages/Detail';
import {NotFound} from './pages/NotFound';



class App extends Component {

  
render(){

  // const url= new URL(document.location)
  // const hasId= url.searchParams.has('id')
  // const Page= url.searchParams.has('id')
  // ?  <Detail id={url.searchParams.get('id')} />
  // : <Home/>

  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/detail/:movieId' component={Detail}/>
      <Route  component={NotFound}/>
    </Switch>
    </div>
  );
}
}

export default App;
