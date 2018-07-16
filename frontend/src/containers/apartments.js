import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import All from '../pages/apartments/All'
import Show from '../pages/apartments/Show'
import Create from '../pages/apartments/Create'
import AuthService from '../services/AuthService'
import Login from '../pages/Login'

const Auth = new AuthService()

class ApartmentContainer extends Component {
	render() {
		const { url } = this.props.match

		return (
			<div>
				{Auth.loggedIn()
					? <Switch>
						<Route exact path={`${url}/new`} component={Create} />
						<Route path={`${url}/:id`} component={Show} />
						<Route exact path={`${url}`} component={All} />
					</Switch>
					: <Switch>
						<Route exact path={"/apartments"} component={All} />
						<Redirect from="/apartments/new" to="/Login"/>
						<Redirect from={`${url}/:id`} to="/Login"/>
						<Route exact path="/" component={All} />
					</Switch>
				}
			</div>
		)
	}
}

export default ApartmentContainer
