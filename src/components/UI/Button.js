import React from "react";
import classes from "./Button.module.css";

const Button = ({ classCss, children, onClick, type }) => {
	return (
		<button onClick={onClick} type={type} className={`${classes.Button} ${classCss ? `${classes[classCss]}` : ""}`}>
			{children}
		</button>
	);
};

export default Button;
