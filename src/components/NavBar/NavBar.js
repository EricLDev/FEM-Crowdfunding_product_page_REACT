import React from "react";
import classes from "./NavBar.module.css";
import logo from "../../images/logo.svg";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

export const NavBar = () => {
	return (
		<div className={classes.NavBar}>
			<img src={logo} alt="" />
			<Navigation />
			<MobileNavigation />
		</div>
	);
};
