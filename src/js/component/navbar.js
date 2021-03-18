import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjDDGMQ0whnQkYM8H7GNnxNcHZJ6b3WyM1w&usqp=CAU"
						width="50"
						height="75"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/cards">
					<button className="btn btn-primary">Characters and Planets Cards</button>
				</Link>
			</div>
		</nav>
	);
};
