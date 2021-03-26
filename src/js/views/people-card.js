import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropType from "prop-types";
import "../../styles/index.scss";

export default function PeopleCard(props) {
	const { store, actions } = useContext(Context);

	const addFavorite = () => {
		actions.addFavorite(store.peoples.filter(item => item.name == props.title));
	};

	return (
		<div className="d-flex">
			<div className="card text-center mainCard flex-fill border-0">
				<img className="cardImage" src={props.imageUrl} alt={props.alt} width="100%" height="240px" />
				<div className="card-body">
					<h3 className="card-title">{props.title}</h3>
					<p className="card-text text-left m-0">
						Gender:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						{props.gender}
					</p>
					<p className="card-text text-left m-0">
						Height:&nbsp;&nbsp;
						{props.height}
					</p>
					<p className="card-text text-left m-0">
						Mass:&nbsp;&nbsp;&nbsp;
						{props.mass}
					</p>
				</div>
				<div className="card-footer">
					<small className="text-muted">
						<div className="d-flex justify-content-between">
							<div className="col m-0 p-0">
								<Link to={`${props.buttonUrl}${props.cardId}`}>
									<button type="button" className="btn btn-outline-primary">
										{props.buttonLabel}
									</button>
								</Link>
							</div>
							<div className="col m-0 p-0">
								<button type="button" className="btn btn-outline-warning" onClick={() => addFavorite()}>
									Favorite
								</button>
							</div>
						</div>
					</small>
				</div>
			</div>
		</div>
	);
}

PeopleCard.propTypes = {
	cardId: PropType.number,
	alt: PropType.string,
	title: PropType.string,
	gender: PropType.string,
	mass: PropType.string,
	height: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
	imageUrl: PropType.string
};
