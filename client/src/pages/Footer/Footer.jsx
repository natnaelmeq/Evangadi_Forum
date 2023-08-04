import React from "react";
import "./Footer.css";
import img1 from "../../assets/Image/Image20230419000207.png";

const Footer = () => {
	return (
		<>
			<div className="container-fluid main-wrapper2">
				<div className="wrapper container">
					<div className="list">
						<div>
							<img className="pb-3" src={img1}></img>
						</div>
						<div className="media-links  col-sm d-flex justify-content">
							<div className="telegram col-sm p-2">
								{" "}
								<i className="fab fa-telegram"></i>
							</div>
							<div className="linkedin col-sm p-2">
								<i className="fab fa-linkedin"></i>
							</div>
							<div className="whatsup col-sm p-2">
								{" "}
								<i className="fab fa-whatsapp"></i>
							</div>
						</div>
					</div>
					<div className="list">
						{" "}
						<h5 className="text-left">Usefull Link</h5>
						<ul className="text-left p-0 m-0">
							<li>How it Works</li>
							<li>Terms of Service</li>
							<li> Privacy policy</li>
						</ul>
					</div>
					<div className="list">
						<h5 className="text-left">Contact Info</h5>
						<ul className="text-left p-0 m-0">
							<li>Evangadi Networks</li>
							<li>Contact at</li>
							<li> +123-4567-890</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
