import React, { useContext } from "react";
import Card from "../UI/Card";
import classes from "./ModalThankYou.module.css";
import check from "../../images/icon-check.svg";
import Button from "../UI/Button";
import { RewardsContext } from "../context/RewardsContext";

const ModalThankYou = () => {
	const rewardsCtx = useContext(RewardsContext);
	const setModalThankYouIsOpen = rewardsCtx.setModalThankYouIsOpen;

	function onClickHandler() {
		setModalThankYouIsOpen(false);
	}

	return (
		<Card classCss="Modal">
			<div className={classes.ModalThankYou}>
				<div className={classes.check}>
					<img src={check} style={{ height: "4rem", width: "4rem" }} alt="" />
				</div>
				<h3>Thanks for your support!</h3>
				<p> Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
				<div className={classes.button}>
					<Button classCss="ModalRewardButton" onClick={onClickHandler}>
						Got it!
					</Button>
				</div>
			</div>
		</Card>
	);
};

export default ModalThankYou;
