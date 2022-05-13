import React from "react";
import classes from "./Button.module.css";

const Button = ({ classCss, children, onClick }) => {
	return (
		<button onClick={onClick} className={`${classes.Button} ${classCss ? `${classes[classCss]}` : ""}`}>
			{children}
		</button>
	);
};

export default Button;
