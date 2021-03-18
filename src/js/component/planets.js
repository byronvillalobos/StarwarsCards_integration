import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = () => {
	return (
		<div className="row mt-4">
			<div className="col-4 mx-2">
				<div className="card">
					<img
						src="https://lumiere-a.akamaihd.net/v1/images/magistrate-morgan-elsbeth-main_d7b9d192.jpeg?region=262%2C1%2C951%2C536&width=768"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
						</p>
						<a href="#" className="btn btn-primary">
							Learn more!
						</a>
						<i className="far fa-heart" />
					</div>
				</div>
			</div>
		</div>
	);
};

// export const Planets = props => {
// 	const { store, actions } = useContext(Context);
// 	const params = useParams();
// 	return (
// 		<div className="jumbotron">
// 			<h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

// 			<hr className="my-4" />

// 			<Link to="/">
// 				<span className="btn btn-primary btn-lg" href="#" role="button">
// 					Planets
// 				</span>
// 			</Link>
// 		</div>
// 	);
// };

// Planets.propTypes = {
// 	match: PropTypes.object
// };
