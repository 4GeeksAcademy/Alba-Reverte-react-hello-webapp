import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-end">
			{/* <Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link> */}
			<div className="container-buttom">
				{/* <Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link> */}
				<Link to ="/contacts" className="btn btn-outline-secondary">Contacts</Link>
				<Link to ="/addContact" className="btn btn-outline-info d-flex align-items-end">Add new contact</Link>
			</div>
		</nav>
	);
};
