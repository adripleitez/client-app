import React from "react";

class MovieRow extends React.Component{
    render(){
        let movie = this.props.movie;

        return(
            <tr className="table-active bg-white">
                <th scope='row'>{movie.name}</th>
                <td >{movie.film_genre}</td>
                <td>{movie.director}</td>
                <td>{movie.year}</td>
                <td>$ {movie.gate_money}</td>
                <td>{movie.rating}</td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={()=>{
                            this.props.onDelete(movie._id);
                        }}>
                            Drop
                        </button>
                </td>
            </tr>
        );
    }
}

export default MovieRow;