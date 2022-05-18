import React, { useState, useContext } from "react";
import { RewardsContext } from "../../context/RewardsContext";
import ModalRewardItem from "./ModalRewardItem";
import classes from "./ModalRewardsList.module.css";

const ModalRewardsList = () => {
	const rewardsCtx = useContext(RewardsContext);
	const noReward = {
		id: 0,
		title: "Pledge with no reward",
		description: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
	};
	const REWARDS = [noReward, ...rewardsCtx.rewards];

	const [selectedOption, setSelectedOption] = useState();
	const setTotalBackers = rewardsCtx.setTotalBackers;
	const setTotalAmount = rewardsCtx.setTotalAmount;
	const pledgedAmount = rewardsCtx.pledgedAmount;
	const setLeftNumber = rewardsCtx.setLeftNumber;

	function onChangeHandler(id) {
		setSelectedOption(id);
	}

	function onSubmitHandler(e) {
		e.preventDefault();
		setTotalBackers((prevTotalBackers) => prevTotalBackers + 1);
		setTotalAmount((prevTotalAmount) => prevTotalAmount + pledgedAmount);
		setLeftNumber((prevLeftNumber) => prevLeftNumber - 1);
	}

	return (
		<form className={classes.ModalRewardsList} onSubmit={onSubmitHandler}>
			{REWARDS.map((reward) => {
				return <ModalRewardItem key={reward.id} title={reward.title} id={reward.id} pledge={reward.pledge} description={reward.description} leftNumber={reward.leftNumber} onChange={onChangeHandler} selectedOption={selectedOption} />;
			})}
		</form>
	);
};

export default ModalRewardsList;
