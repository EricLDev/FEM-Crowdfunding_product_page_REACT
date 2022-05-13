import React from "react";
import ModalRewardItem from "./ModalRewardItem";
import classes from "./ModalRewardsList.module.css";

const ModalRewardsList = () => {
	let MODAL_REWARDS = [
		{
			id: 1,
			title: "Pledge with no reward",
			description: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
		},
		{
			id: 2,
			title: "Bamboo Stand",
			pledge: 25,
			description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
			leftNumber: "101",
		},

		{
			id: 3,
			title: "Black Edition Stand",
			pledge: 75,
			description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
			leftNumber: "64",
		},

		{
			id: 4,
			title: "Mahogany Special Edition",
			pledge: 200,
			description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
			leftNumber: "0",
		},
	];

	return (
		<form className={classes.ModalRewardsList}>
			{MODAL_REWARDS.map((reward) => {
				return <ModalRewardItem key={reward.id} title={reward.title} id={reward.id} pledge={reward.pledge} description={reward.description} leftNumber={reward.leftNumber} />;
			})}
		</form>
	);
};

export default ModalRewardsList;
