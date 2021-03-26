import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, NavLink } from "react-router-dom";
import "../../styles/index.scss";
import DropdownItem from "./dropdown-item";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
	const history = useHistory();

	useEffect(() => {
		history.push("/show-people-card");
	}, []);

	return (
		<div div className="container h50%">
			<nav className="navbar navbar-light mb-3 navbarClass">
				<Link to="/show-people-card">
					<span className="navbar-brand mb-0 h1">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjDDGMQ0whnQkYM8H7GNnxNcHZJ6b3WyM1w&usqp=CAU"
							width="100"
							height="150"
						/>
					</span>
				</Link>

				<NavLink to="/show-people-card">
					<span className="navbar-brand text-black ml-3 mb-0 h1" activeClassName="active">
						Characters
					</span>
				</NavLink>
				<NavLink to="/show-vehicle-card">
					<span className="navbar-brand text-black ml-3 mb-0 h1" activeClassName="active">
						Vehicles
					</span>
				</NavLink>
				<NavLink to="/show-planet-card">
					<span className="navbar-brand text-black ml-3 mb-0 h1" activeClassName="active">
						Planets
					</span>
				</NavLink>
				<div className="ml-auto">
					{/* Invoca el componente que permite crear la lista de items. */}
					<DropdownItem />
				</div>
			</nav>
		</div>
	);
};
