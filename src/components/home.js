import React from 'react';
import MovieRow from './movieRow';
import API from '../utils/apiUrlBase';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movie_list: []
		};
	}

	componentDidMount() {
		let options = {
			headers: {
				Accept: 'application/json'
			}
		};
		fetch(`${API.baseURL}/movies`, options)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				this.setState({ movie_list: this.state.movie_list.concat(data) });
			})
			.catch((err) => console.log('Ocurrio un error en la conexion'));
	}

	handleDelete(movie){

        let options ={
            method : "DELETE",
            headers : {
                "Content-type" : "application/json",
                Accept: "application/json"
            },

            body :  JSON.stringify({id:movie._id})
        }

        fetch(`${API.baseURL}/movies/delete`,options)
        .then(res =>{return res.json()})
        .then(data=>{
            console.log(data);

            let index = this.state.movie_list.find(value=>{
                return value._id === movie._id;
            })
    
            let buffer_list = this.state.movie_list.slice();
            buffer_list.splice(index, 1);
    
            this.setState({
                movie_list: buffer_list
            });
        })
        .catch(err => console.log("Ocurrio un error en la conexion"))
    }

	render() {
		return (
			<div className="table-responsive-md m-5">
				<table className="table">
					<thead>
						<tr className="table-success">
							<th scope="col">Pelicula</th>
							<th scope="col">Genero</th>
							<th scope="col">Director</th>
							<th scope="col">Año Lanzamiento</th>
							<th scope="col">Recaudacion</th>
							<th scope="col">Rating</th>
							<th scope="col">Eliminar</th>
						</tr>
					</thead>
					<tbody>
						{this.state.movie_list.map((element) => {
							return (
								<MovieRow
									key={element._id}
									movie={element}
									onDelete={() => {
										this.handleDelete(element);
									}}
								/>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Home;
