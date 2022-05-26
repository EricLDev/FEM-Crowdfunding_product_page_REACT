import React from "react";
import Card from "../UI/Card";
import close from "../../images/icon-close-modal.svg";
import classes from "./Modal.module.css";
import ModalRewardsList from "./ModalRewards/ModalRewardsList";

const Modal = (props) => {
	return (
		<Card classCss="Modal">
			<div className={classes.headModal}>
				<h3>Back this project</h3>
				<img src={close} alt="" onClick={props.onClick} />
			</div>
			<p id={classes.description}>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
			<ModalRewardsList />
		</Card>
	);
};

export default Modal;
