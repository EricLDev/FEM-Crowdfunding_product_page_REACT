import React, { useContext } from "react";
import RewardItem from "./RewardItem";
import classes from "./RewardsList.module.css";
import { RewardsContext } from "../../context/RewardsContext.js";

const RewardsList = () => {
	const rewardsCtx = useContext(RewardsContext);
	const REWARDS = rewardsCtx.rewards;

	return (
		<div className={classes.RewardsList}>
			{REWARDS.map((reward) => {
				return <RewardItem key={reward.id} title={reward.title} pledge={reward.pledge} description={reward.description} leftNumber={reward.leftNumber} />;
			})}
		</div>
	);
};

export default RewardsList;
