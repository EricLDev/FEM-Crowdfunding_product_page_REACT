import React from "react";
import classes from "./Card.module.css";

const Card = ({ classCss, children }) => {
	return <div className={`${classes.Card} ${classCss ? `${classes[classCss]}` : ""}`}>{children}</div>;
};

export default Card;
