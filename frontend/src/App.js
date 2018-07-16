import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ApartmentCtr from './containers/apartments'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Header />
					<Switch>
						<Route path="/apartments" component={ApartmentCtr} />
						<Route path="/login" component={Login} />
						<Route exact path="/" component={ApartmentCtr}/>
					</Switch>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
