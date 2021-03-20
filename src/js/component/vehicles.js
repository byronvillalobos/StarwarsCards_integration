import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Vehicles = () => {
	const { store, actions } = useContext(Context);
	console.log("data", store.vehicles);

	return (
		<div className="row row-cols-1 row-cols-md-2 g-4">
			{store.vehicles.map((item, i) => {
				return (
					<Card
						key={i}
						var1={item.name}
						var2={"Model: " + item.model}
						var3={"Manufacturer: " + item.manufacturer}
						var4={"Class: " + item.vehicle_class}
						pag={i}
					/>
				);
			})}
		</div>
	);
};
