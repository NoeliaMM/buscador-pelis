import React, {Component} from 'react';
import {Title} from '../components/Title';
import {SearchForm} from '../components/SearchForm';
import { MoviesList } from '../components/MoviesList';


export class Home extends Component{
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
         return (
            <div>
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

