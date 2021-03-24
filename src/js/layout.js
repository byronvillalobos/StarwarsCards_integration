import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { People } from "./component/people";
import { Planets } from "./component/planets";
import { Vehicles } from "./component/vehicles";
import { Detailed } from "./component/detailed";
import { Detailed_planets } from "./component/detailed_planets";
import { Detailed_vehicles } from "./component/detailed_vehicles";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Cards } from "./views/cards";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/people">
							<People />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/vehicles">
							<Vehicles />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/detailed/:id">
							<Detailed />
						</Route>
						<Route exact path="/detailed_planets/:id">
							<Detailed_planets />
						</Route>
						<Route exact path="/detailed_vehicles/:id">
							<Detailed_vehicles />
						</Route>
						<Route exact path="/cards">
							<Cards />
						</Route>
						<Route path="*">
							<h1>404 Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
