import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./MastercraftIntro.module.css";
import mastercraft from "../../images/logo-mastercraft.svg";
import bookmark from "../../images/icon-bookmark.svg";

const MastercraftIntro = () => {
	return (
		<Card>
			<img src={mastercraft} alt="" />
			<h1 className={classes["MastercraftIntro-h1"]}>Mastercraft Bamboo Monitor Riser</h1>
			<p className={classes["MastercraftIntro-p"]}>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
			<div className={classes.callToAction}>
				<Button>Back this project</Button>
				<img src={bookmark} alt="" />
			</div>
		</Card>
	);
};

export default MastercraftIntro;
