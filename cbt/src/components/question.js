// import PropTypes from "prop-types";
import React, { Component } from "react";
import Options from "./options";

export default class Question extends Component {
	constructor(props) {
		super(props);
		this.state = {
			...props.quest,
		};
		console.log(props);
	}
	// componentDidMount() {}
	render() {
		let { quest, opts } = this.state;
		return this.state.quest ? (
			<div>
				{quest}
				<Options options={opts} />
			</div>
		) : (
			<></>
		);
	}
}
