import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const People = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{store.people.map((item, i) => {
				return (
					<div key={i} className="card-group">
						<div className="card">
							<div className="card">
								<Card
									var1={item.name}
									var2={"Height: " + item.height}
									var3={"Eye color: " + item.eye_color}
									var4={"Hair color: " + item.hair_color}
								/>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
