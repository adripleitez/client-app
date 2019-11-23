import React from 'react';
import API from '../utils/apiUrlBase';

class UpdateMovie extends React.Component {
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
			id: '',
			name: '',
			film_genre: '',
			director: '',
			year: '',
			gate_money: '',
			rating: '',
			moviefounded: ''
		};
	}

	findMovie(movieName) {
		console.log(movieName);
		let options = {
			headers: {
				Accept: 'application/json'
			}
		};
		fetch(`${API.baseURL}/movies/${movieName}`, options)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				this.setState({
					id: this.state.id.concat(data._id),
					name: this.state.name.concat(data.name),
					film_genre: this.state.film_genre.concat(data.film_genre),
					director: this.state.director.concat(data.director),
					year: this.state.year.concat(data.year),
					gate_money: this.state.gate_money.concat(data.gate_money),
					rating: this.state.rating.concat(data.rating)
				});
			})
			.catch((err) => console.log('Ocurrio un error en la conexion'));
	}

	handleUpdate(movie) {
		let options = {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
				Accept: 'application/json'
			},

			body: JSON.stringify({ movie })
		};

		fetch(`${API.baseURL}/movies/update`, options)
			.then((res) => {
				return res.json();
			})
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	}

	handleChange = (e) => {
		this.setState({
			moviefounded: e.target.value
		});
	};

	handleChangeform = (e) => {
		let name = e.target.name;
		let value = e.target.value;

		let returnValue = {
			[name]: value
		};

		this.setState(returnValue);
	};

	render() {
		return (
			<div class="container justify-center align-items-center">
				<div className="jumbotron text-center mt-5 " >
					<h1 className="mb-5">Actualizar Película.</h1>

					<div className="form-group row mx-auto">
						<div className="form-group col-sm-7 mx-auto">
							<input
								placeholder="Escriba el nombre de la película"
								className="form-control col-sm-12"
								type="text"
								value={this.state.moviefounded}
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group mx-auto col-sm-6 p-0 mb-6">
							<button
								className="btn btn-outline-success"
								type="submit"
								onClick={() => {
									this.findMovie(this.state.moviefounded);
								}}
							>
								Search
							</button>
						</div>
					</div>

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
							value={this.state.director}
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
							value={this.state.gate_money}
							onChange={this.handleChange}
						/>
					</div>

					<div className="form-group row">
						<label className="col-sm-4 col-form-label">Año de lanzamiento: </label>
						<br />
						<input className="form-control col-sm-5" type="text" value={this.state.year} name="year" onChange={this.handleChange} />
					</div>

					<div className="form-group row">
						<label className="col-sm-4 col-form-label">Rating: </label>
						<br />
						<input
							className="form-control col-sm-5"
							type="text"
							name="rating"
							value={this.state.rating}
							onChange={this.handleChange}
						/>
					</div>

					<div className="form-group">
						<button
							type="button"
							className="btn btn-info mt-3"
							id="submit_btn"
							onClick={() => {
								this.handleUpdate({
									name: this.state.name,
									film_genre: this.state.film_genre,
									director: this.state.director,
									year: this.state.year,
									gate_money: this.state.gate_money,
									rating: this.state.rating
								});
							}}
						>
							Actualizar Película
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default UpdateMovie;
