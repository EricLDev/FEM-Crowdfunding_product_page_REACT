import React from "react";
import classes from "./Button.module.css";

const Button = ({ classCss, children }) => {
	return <button className={`${classes.Button} ${classCss ? `${classes[classCss]}` : ""}`}>{children}</button>;
};

export default Button;
