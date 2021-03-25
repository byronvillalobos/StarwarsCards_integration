import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.scss";

export default function PlanetCardDetail() {
	const params = useParams();
	const cardId = parseInt(params.id);
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="container topCardClass" />
			<div className="container">
				{store.planets.map((item, index) => {
					if (cardId === index) {
						return (
							<div key={index}>
								<div className="row d-flex justify-content-center">
									<div className="container-fluid">
										<div className="mb-3">
											<div className="row g-0">
												<div className="col-lg-4 pr-0">
													<img
														className="card-image-detail"
														src="https://preview.redd.it/ftamwl8y4m131.jpg?width=640&crop=smart&auto=webp&s=c674a1fde1d1395cf80d896c6ece6450dca606f8"
														alt={item.name}
													/>
												</div>
												<div className="col-lg-8">
													<div className="card-body card-body-detail pl-5">
														<h2 className="card-title text-center">{item.name}</h2>
														<p className="card-text text-left m-0">
															Terrain:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
															{item.terrain.charAt(0).toUpperCase() +
																item.terrain.slice(1)}
														</p>
														<p className="card-text text-left m-0">
															Climate:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
															{item.climate.charAt(0).toUpperCase() +
																item.climate.slice(1)}
														</p>
														<p className="card-text text-left m-0">
															Population:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
															{item.population}
														</p>
														<p className="card-text text-left m-0">
															Rotation Period:&nbsp;&nbsp;
															{item.rotation_period}
														</p>
														<p className="card-text text-left m-0">
															Diameter:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
															{item.diameter}
														</p>
														<p className="card-text text-left m-0">
															Gravity:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
															{item.gravity}
														</p>
														<div className="card-button-back d-block">
															<Link to="/show-planet-card">
																<button
																	type="button"
																	className="btn btn-light btn-block">
																	Regresar
																</button>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					}
				})}
			</div>
		</div>
	);
}
