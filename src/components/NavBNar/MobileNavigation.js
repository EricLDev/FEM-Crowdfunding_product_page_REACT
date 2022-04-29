import React from "react";
import NavLinks from "./NavLinks";
import classes from "./NavBar.module.css";
import { ImMenu } from "react-icons/im";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

const MobileNavigation = () => {
	const [open, setOpen] = useState(false);

	const hamburgerIcon = <ImMenu className={classes.Hamburger} size="24px" color="white" onClick={() => setOpen(!open)} />;

	const closeIcon = <MdOutlineClose className={classes.Hamburger} size="24px" color="white" onClick={() => setOpen(!open)} />;

	return (
		<nav className={classes.MobileNavigation}>
			{open ? closeIcon : hamburgerIcon}
			{open && <NavLinks />}
		</nav>
	);
};

export default MobileNavigation;
