import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Navbar extends React.Component {
	getNavLinkClass = (path) => {
		return this.props.location.pathname === path ? 'active' : '';
	};
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<span className="navbar-text mr-3 text-white">BLOG DE PELICULAS</span>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse m-6" id="navbarNav">
					<ul className="navbar-nav">
						<li style={{ margin: '20px' }} className={this.getNavLinkClass('/')}>
							<NavLink to="/"> Home </NavLink>
						</li>
						<li style={{ margin: '20px' }} className={this.getNavLinkClass('/addMovie')}>
							<NavLink to="/addMovie">Agregar Pelicula</NavLink>
						</li>
						<li style={{ margin: '20px' }} className={this.getNavLinkClass('/updateMovie')}>
							<NavLink to="/updateMovie">Actualizar Pelicula</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

Navbar = withRouter(Navbar);
export default Navbar;
