import React, { useState } from "react";
import classes from "./ModalRewardItem.module.css";
import Button from "../../UI/Button";

const ModalRewardItem = (props) => {
	const [rewardAmount, setRewardAmount] = useState();

	const selectedItem = props.selectedOption === String(props.id) ? classes.selectedItem : "";

	return (
		<div className={`${classes.ModalRewardItem} ${selectedItem}`}>
			<div className={classes.inputGroup}>
				<input type="radio" id={props.id} value={props.id} name="modal-reward-item" onChange={(event) => props.onChange(event.target.value)} />
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
			{props.selectedOption === String(props.id) && (
				<div className={classes.pledgeForm}>
					<div className={classes.borderTop} />
					<label htmlFor="pledge">Enter your pledge</label>
					<div className={classes.pledgeInputGroup}>
						<input
							type="text"
							id="pledge"
							placeholder="$"
							onChange={(event) => {
								setRewardAmount(event.target.value);
							}}
						/>
						<Button type="submit" classCss="ModalRewardButton">
							{props.leftNumber === "0" ? "Out of Stock" : "Continue"}
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ModalRewardItem;