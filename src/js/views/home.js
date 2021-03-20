import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "/workspace/react-hello-webapp/src/styles/home.scss";
import { Context } from "../store/appContext";
import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div className="container text-center mt-10 bg'dark">
			<div className="row">
				<div className="col-md-4 d-flex justify-content-center">
					<Link to="/people">
						<img
							className="d-block"
							src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-characters-ranked-1577122930.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
							alt="People"
						/>
					</Link>
				</div>
				<div className="col-md-4 d-flex justify-content-center">
					<Link to="/planets">
						<img
							className="d-block"
							src="https://preview.redd.it/ftamwl8y4m131.jpg?width=640&crop=smart&auto=webp&s=c674a1fde1d1395cf80d896c6ece6450dca606f8"
							alt="Planets"
						/>
					</Link>
				</div>
				<div className="col-md-4 d-flex justify-content-center">
					<Link to="/vehicles">
						<img
							className="d-block"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScmIZNXb-bABpOwmGOSgMLB8Ye-3DZJnp1ZQ&usqp=CAU"
							alt="Vehicles"
						/>
					</Link>
				</div>
				<div className="col-md-1 d-flex justify-content-center" />
			</div>
		</div>
	);
};
