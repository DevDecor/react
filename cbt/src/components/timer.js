import React, { Component } from "react";
// import { useState } from 'react/cjs/react.production.min'

// export default function Timer({timeOut}) {
//   let [time, setTime] = useState('')
//   setTime(timeOut)
// //   let t = time
//   setInterval(()=>{
//       time&&setTime(--time)
//   }, 1000)
//   return (
//
//   )
// }

export default class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: this.props.timeOut,
		};
		this.timing = this.timing.bind(this);
	}
	timing() {
		let t = this.state.time;
		let int = setInterval(() => {
			if (t) {
				this.setState({ time: --t });
			} else {
				alert("time Up!");
				clearInterval(int);
			}
		}, 1000);
		return int;
	}
	componentDidMount() {
		this.timing();
	}
	componentWillUnmount() {
		return true;
		clearInterval(this.timing());
	}
	render() {
		let { time } = this.state;
		return (
			<span>
				{Math.floor(time / 60)}:{time % 60}
			</span>
		);
	}
}
