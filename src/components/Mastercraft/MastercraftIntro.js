import React, { useContext, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./MastercraftIntro.module.css";
import mastercraft from "../../images/logo-mastercraft.svg";
import bookmark from "../../images/icon-bookmark.svg";
import Modal from "../Modal/Modal";
import Backdrop from "../Modal/Backdrop";
import { RewardsContext } from "../../context/RewardsContext";
import ModalThankYou from "../Modal/ModalThankYou";

const MastercraftIntro = () => {
	const rewardsCtx = useContext(RewardsContext);
	const modalIsOpen = rewardsCtx.modalIsOpen;
	const setModalIsOpen = rewardsCtx.setModalIsOpen;
	const modalThankYouIsOpen = rewardsCtx.modalThankYouIsOpen;
	const [isBookmarked, setIsBookmarked] = useState(false);

	function onClickHandler() {
		setModalIsOpen(true);
	}

	function closeModalHandler() {
		setModalIsOpen(false);
	}
	return (
		<Card>
			<img src={mastercraft} alt="" />
			<h1 className={classes["MastercraftIntro-h1"]}>Mastercraft Bamboo Monitor Riser</h1>
			<p className={classes["MastercraftIntro-p"]}>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
			<div className={classes.callToAction}>
				<Button onClick={onClickHandler}>Back this project</Button>
				<img src={bookmark} className={isBookmarked ? `${classes.isBookmarked}` : ""} alt="" onClick={() => setIsBookmarked(!isBookmarked)} />
			</div>
			{modalIsOpen && <Modal onClick={closeModalHandler} />}
			{modalIsOpen && <Backdrop onClick={closeModalHandler} />}
			{modalThankYouIsOpen && <ModalThankYou />}
			{modalThankYouIsOpen && <Backdrop onClick={closeModalHandler} />}
		</Card>
	);
};

export default MastercraftIntro;
