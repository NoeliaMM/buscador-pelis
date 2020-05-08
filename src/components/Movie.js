import React, {Component} from 'react';
import Proptypes from 'prop-types'


export class Movie extends Component{
    static propTypes={
        id: Proptypes.string,
        title: Proptypes.string,
        year: Proptypes.string,
        poster: Proptypes.string
    }

    render(){
        const { id, poster, title, year } =this.props
        return (
            <a href={`?id=${id}`} className = "card" >
                <div className="card-image">
                    <figure className="image">
                        <img 
                        alt={title}
                        src={poster} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6">{year}</p>
                        </div>
                    </div>
                </div>
            </a>
        )     
        
    }
}