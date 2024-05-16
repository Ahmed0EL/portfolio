import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
// import Article from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";
// import myArticles from "../data/articles";

import "./styles/articles.css";

const Tools = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="MyTools" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<div className="title articles-title">
							{INFO.tools.title}
						</div>

						<div className="subtitle articles-subtitle">
							{INFO.tools.description}
						</div>

						<div className="articles-container tools">
                            <img className="icon-imag" src="../icon/Git.png" />
                            <img className="icon-imag" src="../icon/javascript.png" />
                            <img className="icon-imag" src="../icon/html.png" />
                            <img className="icon-imag" src="../icon/github.png" />
                            <img className="icon-imag" src="../icon/Figma.png" />
                            <img className="icon-imag" src="../icon/descord.png" />
                            <img className="icon-imag" src="../icon/css.webp" />
                            <img className="icon-imag" src="../icon/cpp.png" />
                            <img className="icon-imag" src="../icon/bootstrapp.jpeg" />
                            <img className="icon-imag" src="../icon/Blender.png" />
                            <img className="icon-imag" src="../icon/Azure.png" />
                            <img className="icon-imag" src="../icon/adobe-illustrator.png" />
						</div> 
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Tools ;
