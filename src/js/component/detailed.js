import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { Single } from "../views/single";

export const Detailed = () => {
	const { id } = useParams();
	const intId = parseInt(id);
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="row row-cols-1 row-cols-md-2 g-4">
				{store.people.map((item, i) => {
					if (intId == i) {
						console.log("entro al if");

						return (
							<div className="card text-center">
								<div key={i} className="card-header">
									<h1>{item.name}</h1>
									<div className="card-body">
										<h4>
											<p>Height: {item.height}</p>
											<p>Mass: {item.mass}</p>
											<p>Hair Color: {item.hair_color}</p>
											<p>Skin Color: {item.skin_color}</p>
											<p>Gender: {item.gender}</p>
											<p>Birth Year: {item.birth_year}</p>
										</h4>
									</div>
								</div>
							</div>
						);
					}
				})}
			</div>
			<Link to="/people/">
				<span className="btn btn-primary btn-lg" href="/people/" role="button">
					{/* "javascript:history.back()" */}
					Back
				</span>
			</Link>
		</div>
	);
};
