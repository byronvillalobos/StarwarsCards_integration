import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { Single } from "../views/single";

export const Detailed_vehicles = () => {
	const { id } = useParams();
	const intId = parseInt(id);
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="row row-cols-1 row-cols-md-2 g-4">
				{store.vehicles.map((item, i) => {
					if (intId == i) {
						console.log("entro al if");

						return (
							<div className="card text-center">
								<div key={i} className="card-header">
									<h1>Name: {item.name}</h1>

									<div className="card-body">
										<h4>
											<p>Model: {item.model}</p>
											<p>Manufacturer: {item.manufacturer}</p>
											<p>Lenght: {item.lenght}</p>
											<p>Crew: {item.Crew}</p>
											<p>Passengers: {item.passengers}</p>
											<p>Cargo Capacity: {item.cargo_capacity}</p>
										</h4>
									</div>
								</div>
							</div>
						);
					}
				})}
			</div>
			<Link to="/vehicles/">
				<span className="btn btn-primary btn-lg" href="/vehicles/" role="button">
					Back
				</span>
			</Link>
		</div>
	);
};
