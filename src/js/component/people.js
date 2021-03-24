import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const People = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row row-cols-1 row-cols-md-2 g-4">
			{store.people.map((item, i) => {
				return (
					<Card
						key={i}
						var1={item.name}
						var2={"Height: " + item.height}
						var3={"Eye color: " + item.eye_color}
						var4={"Hair color: " + item.hair_color}
						pag={i}
						pagtobelinked={"detailed"}
					/>
				);
			})}
		</div>
	);
};
