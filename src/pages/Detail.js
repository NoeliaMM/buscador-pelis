import React, {Component} from 'react';
import Proptypes from 'prop-types'

const API_KEY ='ad654455'

export class Detail extends Component{

    static propTypes={
        id: Proptypes.string
    }

    state = {movie: {}}

    _fetchMovie({id}){
        console.log(id);
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res=>res.json())
        .then(movie=>{
        //    const {Search = [], totalResults ="0"}=results  //se usa propiedad de ES para dar un valor por defecto a los resultados

        //    const searchResults=Search || []
            console.log(movie);
           this.setState({movie})
        })
    }

    componentDidMount(){
        const{id}= this.props
        this._fetchMovie({id})
    }

    _goBack(){
        window.history.back()
    }

    render(){
        const {Title, Poster, Actors, Metascore, Plot}= this.state.movie

        return (
        <div className="Details">  
        <button onClick={this._goBack}>Volver</button>    
            <div class="tile is-parent">
                <article className="tile is-child notification is-primary">
                    <p class="title">{Title}</p>
                    <p class="subtitle">{Actors}</p>
                    <figure class="image">
                    <img 
                        alt={Title}
                        src={Poster}/>
                    </figure>                   
                        <span>{Metascore} min.</span>
                        <p>{Plot}</p> 
                </article>
            </div>
        </div>
        )
    }
}