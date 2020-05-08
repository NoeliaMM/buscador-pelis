import React, {Component} from 'react';

const API_KEY ='ad654455'


export class SearchForm extends Component{
    state={
        inputMovie:''
    }

    _handleChange= (e)=>{
        this.setState({inputMovie: e.target.value})
    }

    _handleSubmit=(e)=>{
        e.preventDefault()
        // alert(this.state.inputMovie)
        const {inputMovie}=this.state
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${inputMovie}`)
        .then(res=>res.json())
        .then(results=>{
           const {Search = [], totalResults ="0"}=results  //se usa propiedad de ES para dar un valor por defecto a los resultados

        //    const searchResults=Search || []
            console.log({Search, totalResults})
           this.props.onResults(Search);
        })
        
    
    }


    render(){
        return (
        <form onSubmit={this._handleSubmit}>
            <div className="field has-addons">
            <div className="control">
                <input 
                className="input" 
                onChange={this._handleChange}
                type="text" 
                placeholder="Encuentra tu peli..." />
            </div>
            <div className="control">
                <button className="button is-info">
                Buscar
                </button>
            </div>
            </div>
        </form>


        );
    }
}