import React, { useState, createContext } from "react";

const Rewards = [
	{
		id: 1,
		title: "Bamboo Stand",
		pledge: 25,
		description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
		leftNumber: 101,
	},

	{
		id: 2,
		title: "Black Edition Stand",
		pledge: 75,
		description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		leftNumber: 64,
	},

	{
		id: 3,
		title: "Mahogany Special Edition",
		pledge: 200,
		description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		leftNumber: 0,
	},
];

export const RewardsContext = createContext();

export const RewardsContextProvider = (props) => {
	const [totalAmount, setTotalAmount] = useState(89914);
	const [totalBackers, setTotalBackers] = useState(5007);
	const [pledgedAmount, setPledgedAmount] = useState(0);
	const [rewards, setRewards] = useState(Rewards);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalThankYouIsOpen, setModalThankYouIsOpen] = useState(false);

	const value = { rewards, setRewards, totalAmount, setTotalAmount, totalBackers, setTotalBackers, pledgedAmount, setPledgedAmount, modalIsOpen, setModalIsOpen, modalThankYouIsOpen, setModalThankYouIsOpen };

	return <RewardsContext.Provider value={value}>{props.children}</RewardsContext.Provider>;
};
