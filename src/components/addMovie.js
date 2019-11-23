import React from 'react';
import API from '../utils/apiUrlBase';

class AddMovie extends React.Component {
	constructor(props) {
		super(props);

		this.options = [
			'Acción',
			'Aventura',
			'Drama',
			'Crimen',
			'Comedia',
			'Fantasía',
			'Historica',
			'Horror',
			'Ciencia Ficción',
			'Romántica',
			'Independiente'
		];

		this.state = {
			name: '',
			film_genre: '',
			director: '',
			year: '',
			gate_money: '',
            rating: '',
            isDisable: true,
		};
	}

	handleSubmit(movie) {
		let options = {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				Accept: 'application/json'
			},

			body: JSON.stringify(movie)
		};

		fetch(`${API.baseURL}/movies/register`, options)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				let list = this.state.movie_list.slice();

				this.setState({
					movie_list: list.concat([ data.movie ])
				});
			})
			.catch((err) => console.log('Ocurrio un error en la conexion'));
    }
    
    handleChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        let returnValue = {
            [name]: value,
        }

        this.setState(returnValue);
    }


	render() {
		return (
			<div class="container justify-center">

			<div className="jumbotron text-center mt-5">
				<h1 className="mb-5">Añadir Película.</h1>

				<div className="form-group row">
					<label className="col-sm-4 col-form-label">Nombre de la Película: </label>
					<input
						className="form-control col-sm-5"
						type="text"
						name="name"
                        value={this.state.name}
						onChange={this.handleChange}
					/>
				</div>

				<div className="form-group row">
					<label className="col-sm-4 col-form-label">Seleccione el Genero:</label>
					<select
						name="film_genre"
						className="form-control col-sm-5 custom-select"
						onChange={this.handleChange}
						value={this.state.film_genre}
					>
						{this.options.map((elem) => {
							return <option key={elem}>{elem}</option>;
						})}
					</select>
				</div>

				<div className="form-group row">
					<label className="col-sm-4 col-form-label">Nombre del director: </label>
					<br />
					<input
						className="form-control col-sm-5"
						type="text"
						name="director"
						onChange={this.handleChange}
					/>
				</div>

				<div className="form-group row">
					<label className="col-sm-4 col-form-label">Recaudación: </label>
					<br />
					<input
						className="form-control col-sm-5"
						type="text"
						name="gate_money"
                        value={this.state.value}
						onChange={this.handleChange}
					/>
				</div>

				<div className="form-group row">
					<label className="col-sm-4 col-form-label">Año de lanzamiento: </label>
					<br />
					<input
						className="form-control col-sm-5"
						type="text"
						name="year"
						onChange={this.handleChange}
					/>
				</div>

				<div className="form-group row">
					<label className="col-sm-4 col-form-label">Rating: </label>
					<br />
					<input
						className="form-control col-sm-5"
						type="text"
						name="rating"
						onChange={this.handleChange}
					/>
				</div>

				<div className="form-group">
					<button
						type="button"
						className="btn btn-info mt-3"
						id="submit_btn"
						onClick={() => {
							this.handleSubmit({
								name: this.state.name,
								film_genre: this.state.film_genre,
								director: this.state.director,
								year: this.state.year,
								gate_money: this.state.gate_money,
								rating: this.state.rating
							});
						}}
                    >Añadir Película</button>
				</div>
			</div>
			</div>
		);
	}
}

export default AddMovie;
