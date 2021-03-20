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
		<div className="row row-cols-1 row-cols-md-2 g-4">
			{store.vehicles.map((item, i) => {
				if (intId == i) {
					console.log("entro al if");

					return (
						<h1 key={i} className="text-warning">
							{item.name}
						</h1>
					);
				}
			})}

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="goBack()" role="button">
					{/* "javascript:history.back()" */}
					Back
				</span>
			</Link>
		</div>
	);
};
