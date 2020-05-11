import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {ButtonBackToHome} from '../components/ButtonBackToHome';

const API_KEY ='ad654455'

export class Detail extends Component{

    static propTypes={
        match: Proptypes.shape({
            params:Proptypes.object,
            isExact:Proptypes.bool,
            path: Proptypes.string,
            url: Proptypes.string
        })
    }

    state = {movie: {}}

    _fetchMovie({id}){ 
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res=>res.json())
        .then(movie=>{
        //    const {Search = [], totalResults ="0"}=results  //se usa propiedad de ES para dar un valor por defecto a los resultados
        //    const searchResults=Search || []
           this.setState({movie})
        })
    }

    componentDidMount(){
        console.log(this.props.match)
        const{movieId}= this.props.match.params
        this._fetchMovie({id: movieId})
    }

    // _goBack(){
    //     window.history.back()
    // }

    render(){
        const {Title, Poster, Actors, Metascore, Plot}= this.state.movie

        return (
        <div className="Details">  
        {/* <button onClick={this._goBack}>Volver</button>  */}
        <ButtonBackToHome/>   
            <div className="tile is-parent">
                <article className="tile is-child notification is-primary">
                    <p className="title">{Title}</p>
                    <p className="subtitle">{Actors}</p>
                    <figure className="image">
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