import React from 'react';
import AddMovie from './addMovie';
import UpdateMovie from './updateMovie';
import Nav from "./navbar"
import Home from "./home";
import {BrowserRouter, Route} from "react-router-dom"

class Main extends React.Component {
	render() {
		return (
			<div>
        <BrowserRouter>
          <div>
            <Nav/>
            <Route exact path="/" component={Home} />
            <Route exact path="/addMovie" component={AddMovie} />
            <Route path="/updateMovie" component={UpdateMovie} />
          </div>
        </BrowserRouter>
      </div>
		);
	}
}

export default Main;
