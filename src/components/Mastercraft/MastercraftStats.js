import React, { useContext, useState } from "react";
import Card from "../UI/Card";
import classes from "./MastercraftStats.module.css";
import { RewardsContext } from "../../context/RewardsContext";

const MastercraftStats = () => {
	const rewardsCtx = useContext(RewardsContext);
	const totalAmount = rewardsCtx.totalAmount;
	const formattedTotalAmount = totalAmount.toLocaleString("en-US");
	const totalBackers = rewardsCtx.totalBackers;
	const formattedTotalBackers = totalBackers.toLocaleString("en-US");
	const [daysLeft, setDaysLeft] = useState();

	let progressionBarWidth = Math.floor(totalAmount / 1000);

	var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

	var x = setInterval(function () {
		// Get today's date and time
		var now = new Date().getTime();

		// Find the distance between now and the count down date
		var distance = countDownDate - now;

		// Time calculations for days
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));

		// Update State variable with days
		setDaysLeft(days);
		// If the count down is over, write some text
		if (distance < 0) {
			clearInterval(x);
			setDaysLeft("Time is up!");
		}
	}, 1000);

	return (
		<Card>
			<div className={classes.MastercraftStats}>
				<div className={classes.Stats}>
					<h2>&#36;{formattedTotalAmount} </h2>
					<p>of $100,000 backed</p>
				</div>
				<div className={classes.separator}>
					<div></div>
				</div>
				<div className={classes.Stats}>
					<h2>{formattedTotalBackers}</h2>
					<p className={classes.p}>total backers</p>
				</div>
				<div className={classes.separator}>
					<div></div>
				</div>
				<div className={classes.Stats}>
					<h2>{daysLeft}</h2>
					<p>days left</p>
				</div>
				<div className={classes.bgProgressionBar}>
					<div className={classes.ProgressionBar} style={{ width: `${progressionBarWidth}%` }}></div>
				</div>
			</div>
		</Card>
	);
};

export default MastercraftStats;
