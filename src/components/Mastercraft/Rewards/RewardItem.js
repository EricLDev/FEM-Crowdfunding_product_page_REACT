import React from "react";
import Button from "../../UI/Button";
import classes from "./RewardItem.module.css";

const RewardItem = (props) => {
	return (
		<div className={classes.RewardItem}>
			<h4>{props.title}</h4>
			<h4>{props.pledge}</h4>
			<p>{props.description}</p>
			<p>
				{props.leftNumber} <span>left</span>
			</p>
			<Button classCss="RewardButton">{props.leftNumber === "0" ? "Out of Stock" : "Select Reward"}</Button>
		</div>
	);
};

export default RewardItem;
