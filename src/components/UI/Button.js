import React from "react";
import classes from "./Button.module.css";

const Button = ({ classCss, children, onClick, type, leftNumber }) => {
	return (
		<button onClick={onClick} type={type} className={`${classes.Button} ${classCss ? `${classes[classCss]}` : ""}`} disabled={leftNumber === 0}>
			{children}
		</button>
	);
};

export default Button;
