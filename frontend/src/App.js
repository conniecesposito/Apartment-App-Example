import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AllApartments from './pages/apartments/All'
import CreateApartment from './pages/apartments/Create'
import ShowApartment from './pages/apartments/Show'
import Login from './components/Login';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					{/* Restful Routes for Apartment */}
					<Route exact path="/apartments" component={AllApartments} />
					<Route path="/apartments/new" component={CreateApartment} />
					<Route path="/apartments/:id" component={ShowApartment} />
					<Route path="/login" component={Login} />
					<Route exact path="/" component={AllApartments}/>
				</Switch>
			</Router>
		);
	}
}

export default App;
