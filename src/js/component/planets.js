import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card-group">
			<div className="col-sm-3">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text" />{" "}
						{store.planets.map((item, i) => {
							return (
								<Card
									key={i}
									var1={item.name}
									var2={"Gravity: " + item.gravity}
									var3={"Diameter: " + item.diameter}
									var4={"Climate: " + item.climate}
								/>
							);
						})}{" "}
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
