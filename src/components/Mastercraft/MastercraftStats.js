import React, { useContext } from "react";
import Card from "../UI/Card";
import classes from "./MastercraftStats.module.css";
import { RewardsContext } from "../context/RewardsContext";

const MastercraftStats = () => {
	const rewardsCtx = useContext(RewardsContext);
	const totalAmount = rewardsCtx.totalAmount;
	const formattedTotalAmount = totalAmount.toLocaleString("en-US");
	const totalBackers = rewardsCtx.totalBackers;
	const formattedTotalBackers = totalBackers.toLocaleString("en-US");
	const daysLeft = rewardsCtx.daysLeft;

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
					<div className={classes.ProgressionBar}></div>
				</div>
			</div>
		</Card>
	);
};

export default MastercraftStats;
