import React, { useState } from "react";
import classes from "./ModalRewardItem.module.css";
import Button from "../../UI/Button";

const ModalRewardItem = (props) => {
	const [selectedOption, setSelectedOption] = useState();

	function onClickHandler(e) {
		setSelectedOption(e.target.checked);
		console.log(e.target.checked);
	}

	return (
		<div className={classes.ModalRewardItem}>
			<div className={classes.inputGroup}>
				<input type="radio" id={props.id} name="modal-reward-item" onClick={onClickHandler} />
				<div>
					<label htmlFor={props.id}>
						<h4>{props.title}</h4>
					</label>
					{props.pledge ? <h4>Pledge ${props.pledge} or more</h4> : ""}
				</div>
			</div>

			<p>{props.description}</p>
			{props.leftNumber ? (
				<p>
					{props.leftNumber} <span>left</span>
				</p>
			) : (
				""
			)}
			{selectedOption && <Button classCss="RewardButton">{props.leftNumber === "0" ? "Out of Stock" : "Select Reward"}</Button>}
		</div>
	);
};

export default ModalRewardItem;
