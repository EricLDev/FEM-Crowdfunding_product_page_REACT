import React, { useContext } from "react";
import { RewardsContext } from "../../context/RewardsContext";
import Button from "../../UI/Button";
import classes from "./RewardItem.module.css";

const RewardItem = (props) => {
	const rewardsCtx = useContext(RewardsContext);
	const setModalIsOpen = rewardsCtx.setModalIsOpen;
	const setSelectedOption = rewardsCtx.setSelectedOption;

	function onClickHandler() {
		setSelectedOption(props.id);
		setModalIsOpen(true);
	}
	return (
		<div className={classes.RewardItem}>
			<h4>{props.title}</h4>
			<h4>Pledge ${props.pledge} or more</h4>
			<p>{props.description}</p>
			<p>
				{props.leftNumber} <span>left</span>
			</p>
			<Button onClick={onClickHandler} classCss="RewardButton">
				{props.leftNumber === "0" ? "Out of Stock" : "Select Reward"}
			</Button>
		</div>
	);
};

export default RewardItem;
