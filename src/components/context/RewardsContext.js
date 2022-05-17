import React, { useState, createContext } from "react";

export const RewardsContext = createContext();

export const RewardsContextProvider = (props) => {
	const [totalAmount, setTotalAmount] = useState(89914);
	const [totalBackers, setTotalBackers] = useState(5007);
	const [daysLeft, setDaysLeft] = useState(56);

	const value = { totalAmount, setTotalAmount, totalBackers, setTotalBackers, daysLeft, setDaysLeft };

	return <RewardsContext.Provider value={value}>{props.children}</RewardsContext.Provider>;
};
