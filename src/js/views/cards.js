import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { People } from "../component/people";
import { Planets } from "../component/planets";
import "../../styles/demo.scss";

export const Cards = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<People />
			<Planets />
		</div>
	);
};
