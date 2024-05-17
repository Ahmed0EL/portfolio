import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Studies"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./ofppt.png"
								alt="ofppt"
								className="work-image"
							/>
							<div className="work-title">Institut de Technologie Appliquée El Hank</div>
							<div className="work-subtitle">
								Développement Digital
							</div>
							<div className="work-duration">2022 - 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
