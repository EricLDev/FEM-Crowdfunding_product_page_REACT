import React from "react";
import Card from "../UI/Card";
import classes from "./MastercraftStats.module.css";

const MastercraftStats = () => {
	return (
		<Card>
			<div className={classes.MastercraftStats}>
				<div className={classes.Stats}>
					<h2>&#36;89,914 </h2>
					<p>of $100,000 backed</p>
				</div>
				<div className={classes.separator}>
					<div></div>
				</div>
				<div className={classes.Stats}>
					<h2>5,007</h2>
					<p className={classes.p}>total backers</p>
				</div>
				<div className={classes.separator}>
					<div></div>
				</div>
				<div className={classes.Stats}>
					<h2>56</h2>
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
