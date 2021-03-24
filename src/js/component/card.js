import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="col">
			<div className="card">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_20z36P9VgEMUSm5ITbk0jue77Un9Hsr0Q&usqp=CAU"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.var1}</h5>
					<p className="card-text">
						{props.var2}
						<br />
						{props.var3}
						<br />
						{props.var4}
					</p>

					<Link to={`/${props.pagtobelinked}/${props.pag}`}>
						<span className="btn btn-outline-dark" role="button">
							Learn more
						</span>
					</Link>
					<i className="far fa-heart" />
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	var1: PropTypes.string,
	var2: PropTypes.string,
	var3: PropTypes.string,
	var4: PropTypes.string,
	pag: PropTypes.number,
	pagtobelinked: PropTypes.string
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
