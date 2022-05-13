import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./MastercraftIntro.module.css";
import mastercraft from "../../images/logo-mastercraft.svg";
import bookmark from "../../images/icon-bookmark.svg";
import Modal from "../Modal/Modal";
import Backdrop from "../Modal/Backdrop";

const MastercraftIntro = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

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
				<img src={bookmark} alt="" />
			</div>
			{modalIsOpen && <Modal onClick={closeModalHandler} />}
			{modalIsOpen && <Backdrop onClick={closeModalHandler} />}
		</Card>
	);
};

export default MastercraftIntro;
