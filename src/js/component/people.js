import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const People = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row">
			<div className="col-sm-6">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text" />{" "}
						{store.people.map((item, i) => {
							return (
								<Card
									key={i}
									var1={item.name}
									var2={"Height: " + item.height}
									var3={"Eye color: " + item.eye_color}
									var4={"Hair color: " + item.hair_color}
								/>
							);
						})}{" "}
					</div>
				</div>
			</div>
		</div>
	);
};

// export const People = props => {
// 	const { store, actions } = useContext(Context);
// 	const params = useParams();
// 	return (
// 		<div className="jumbotron">
// 			<h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

// 			<hr className="my-4" />

// 			<Link to="/">
// 				<span className="btn btn-primary btn-lg" href="#" role="button">
// 					People
// 				</span>
// 			</Link>
// 		</div>
// 	);
// };

// People.propTypes = {
// 	match: PropTypes.object
// };
