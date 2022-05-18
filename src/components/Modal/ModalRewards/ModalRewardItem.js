import React, { useContext } from "react";
import classes from "./ModalRewardItem.module.css";
import Button from "../../UI/Button";
import { RewardsContext } from "../../context/RewardsContext";

const ModalRewardItem = (props) => {
	const rewardsCtx = useContext(RewardsContext);
	const setPledgedAmount = rewardsCtx.setPledgedAmount;
	let leftNumber = rewardsCtx.leftNumber;
	leftNumber = props.leftNumber;
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
			{props.pledge ? (
				<p>
					{leftNumber} <span>left</span>
				</p>
			) : (
				""
			)}
			{props.selectedOption === String(props.id) && (
				<div className={classes.pledgeForm}>
					<div className={classes.borderTop} />
					{props.pledge ? <label htmlFor="pledge">Enter your pledge</label> : ""}
					<div className={classes.pledgeInputGroup} style={{ justifyContent: props.pledge ? "space-between" : "center" }}>
						{props.pledge ? (
							<input
								type="text"
								id="pledge"
								placeholder="$"
								onChange={(event) => {
									setPledgedAmount(Number(event.target.value));
								}}
							/>
						) : (
							""
						)}
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
