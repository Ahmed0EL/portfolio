import React from "react";

function article_1() {
	return {
		date: "2022 - 2024",
		title: "Institut de Technologie Appliquée El Hank en Développement Digital",
		description: null ,
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],link :null
	};
}

function article_2() {
	return {
		date: "2023",
		title: "Certification Responsive Web Design obtenue de freeCodeCamp",
		description: null ,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],link :"https://www.freecodecamp.org/certification/Ahmed-elhouinki/responsive-web-design"
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
