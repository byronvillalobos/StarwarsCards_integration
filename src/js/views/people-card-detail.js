import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.scss";

export default function PeopleCardDetail() {
	const params = useParams();
	const cardId = parseInt(params.id);
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="container topCardClass" />
			<div className="container">
				{store.peoples.map((item, index) => {
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
														src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-characters-ranked-1577122930.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
														alt={item.name}
													/>
												</div>
												<div className="col-lg-8">
													<div className="card-body card-body-detail pl-5">
														<h2 className="card-title text-center">{item.name}</h2>
														<p className="card-text text-left m-0">
															Gender:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
															{item.gender.charAt(0).toUpperCase() + item.gender.slice(1)}
														</p>
														<p className="card-text text-left m-0">
															birth_year:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
															{item.birth_year}
														</p>
														<p className="card-text text-left m-0">
															Skin Color:&nbsp;&nbsp;&nbsp;&nbsp;
															{item.skin_color.charAt(0).toUpperCase() +
																item.skin_color.slice(1)}
														</p>
														<p className="card-text text-left m-0">
															Hair Color:&nbsp;&nbsp;&nbsp;
															{item.hair_color.charAt(0).toUpperCase() +
																item.hair_color.slice(1)}
														</p>
														<p className="card-text text-left m-0">
															Eye Color:&nbsp;&nbsp;&nbsp;&nbsp;
															{item.eye_color.charAt(0).toUpperCase() +
																item.eye_color.slice(1)}
														</p>
														<p className="card-text text-left m-0">
															Height:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
															{item.height}
														</p>
														<div className="card-button-back d-block">
															<Link to="/show-people-card">
																<button
																	type="button"
																	className="btn btn-light btn-block">
																	Back
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
