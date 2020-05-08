import React, {Component} from 'react';
import {Title} from './components/Title';
import {SearchForm} from './components/SearchForm';
import { MoviesList } from './components/MoviesList';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'


import {Detail} from './pages/Detail';



class App extends Component {
state={usedSearch:false, results: []}

_handleResults =(results)=>{
  this.setState({results,usedSearch: true})
}

_renderResults(){
  return(
    this.state.results.length === 0
      ? <p>Ohhh, lo sentimos , no hay resultados</p>
      : <MoviesList movies={this.state.results} />
      
  )
}
  
render(){

  const url= new URL(document.location)
  const hasId= url.searchParams.has('id')
  if(hasId){
    return(
      <Detail id={url.searchParams.get('id')} />
    )
  }
  return (
    <div className="App">
      <Title>Buscador de Películas</Title>
      <div className="SearchForm-Wrapper">
        <SearchForm onResults={this._handleResults}/>
      </div>
      {this.state.usedSearch 
      ? this._renderResults()
      : <small>Usa el formulario para buscar una película</small>}



    </div>
  );
}
}

export default App;
