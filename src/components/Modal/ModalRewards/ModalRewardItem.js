import React, { useContext } from "react";
import classes from "./ModalRewardItem.module.css";
import Button from "../../UI/Button";
import { RewardsContext } from "../../../context/RewardsContext";

const ModalRewardItem = (props) => {
	const rewardsCtx = useContext(RewardsContext);
	const setPledgedAmount = rewardsCtx.setPledgedAmount;
	const selectedOption = rewardsCtx.selectedOption;
	const selectedItem = selectedOption === props.id ? classes.selectedItem : "";

	return (
		<div className={`${classes.ModalRewardItem} ${selectedItem} ${props.leftNumber === 0 ? `${classes.Disabled}` : ""}`}>
			<div className={classes.inputGroup}>
				<input type="radio" id={props.id} value={props.id} name="modal-reward-item" onChange={(event) => props.onChange(event.target.value)} disabled={props.leftNumber === 0} />
				<div id={classes.label}>
					<label htmlFor={props.id}>
						<h4>{props.title}</h4>
					</label>
					{props.pledge ? <h4>Pledge ${props.pledge} or more</h4> : ""}
				</div>
			</div>

			<p>{props.description}</p>
			{props.pledge ? (
				<p>
					{props.leftNumber} <span>left</span>
				</p>
			) : (
				""
			)}
			{selectedOption === props.id && (
				<div className={classes.pledgeForm} style={{ justifyContent: props.pledge ? "space-between" : "center" }}>
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
						<Button onClick={() => props.getItemData(props.pledge, props.leftNumber)} type="submit" classCss="ModalRewardButton" leftNumber={props.leftNumber}>
							{props.leftNumber === 0 ? "Out of Stock" : "Continue"}
						</Button>
					</div>
					{props.errorAmount && <h4 style={{ marginTop: "1rem", color: "red" }}>{props.errorMessage}</h4>}
				</div>
			)}
		</div>
	);
};

export default ModalRewardItem;
