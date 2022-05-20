import React, { useContext, useState } from "react";
import { RewardsContext } from "../../../context/RewardsContext";
import ModalRewardItem from "./ModalRewardItem";
import classes from "./ModalRewardsList.module.css";

const ModalRewardsList = () => {
	const rewardsCtx = useContext(RewardsContext);
	const rewards = rewardsCtx.rewards;
	const setRewards = rewardsCtx.setRewards;
	const noReward = {
		id: 0,
		title: "Pledge with no reward",
		description: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
	};
	const REWARDS = [noReward, ...rewards];

	const selectedOption = rewardsCtx.selectedOption;
	const setSelectedOption = rewardsCtx.setSelectedOption;
	const setTotalBackers = rewardsCtx.setTotalBackers;
	const setTotalAmount = rewardsCtx.setTotalAmount;
	const pledgedAmount = rewardsCtx.pledgedAmount;
	const setModalIsOpen = rewardsCtx.setModalIsOpen;
	const setModalThankYouIsOpen = rewardsCtx.setModalThankYouIsOpen;
	const [errorAmount, setErrorAmount] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [itemPledge, setItemPledge] = useState();
	const setLeftNumber = rewardsCtx.setLeftNumber;

	function onChangeHandler(id) {
		setSelectedOption(Number(id));
	}

	function getItemData(pledge, leftNumber) {
		setItemPledge(pledge);
		setLeftNumber(leftNumber);
	}

	function updateLeftNumber(id, rewards) {
		const newRewards = rewards.map((obj) => {
			if (obj.id === id) {
				setLeftNumber(obj.leftNumber--);
				return { ...obj, leftNumber: obj.leftNumber-- };
			}
			return obj;
		});
		setRewards(newRewards);
	}

	function validateAmount(e) {
		e.preventDefault();

		if (pledgedAmount < itemPledge) {
			setErrorAmount(true);
			setErrorMessage(`Please pledge $${itemPledge} or more`);
		} else {
			setTotalBackers((prevTotalBackers) => prevTotalBackers + 1);
			setTotalAmount((prevTotalAmount) => prevTotalAmount + pledgedAmount);
			setModalIsOpen(false);
			setModalThankYouIsOpen(true);
			setErrorAmount(false);
			setErrorMessage("");
			updateLeftNumber(selectedOption, rewards);
		}
	}

	return (
		<form className={classes.ModalRewardsList} onSubmit={validateAmount}>
			{REWARDS.map((reward) => {
				return (
					<ModalRewardItem
						key={reward.id}
						title={reward.title}
						id={reward.id}
						pledge={reward.pledge}
						description={reward.description}
						leftNumber={reward.leftNumber}
						onChange={onChangeHandler}
						getItemData={getItemData}
						selectedOption={selectedOption}
						errorMessage={errorMessage}
						errorAmount={errorAmount}
					/>
				);
			})}
		</form>
	);
};

export default ModalRewardsList;
