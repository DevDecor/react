import axios from "axios";
import React, { Component } from "react";
import Question from "./question";
import Timer from "./timer";

// export default function Container() {
// 	async function getQuestions() {
// 		let gotten;
// 		return await axios.get("http://127.0.0.1:5000/api/questions");
// 		//  gotten;
// 	}
// 	// const gotten = getQuestions();
// 	// console.log(gotten);
// 	// var [questions, setQ] = useState();
// 	// setQ(0);
// 	// var [questions, setQ] = useState()
// 	// let update = num => {
// 	// 	setQ(num);
// 	// };
// 	return (
// 		<div className="container row center justify-content-center">
// 			<h1 className="col-12 text-center">Cbt Started</h1>
// 			<h3 className="col-12 text-center text-warning">
// 				Remaining time: <Timer timeOut={10} />
// 			</h3>
// 			<Question quest={co} />
// 		</div>
// 	);
// }

export default class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quests: props.quest,
			num: 0,
			dataLoaded: false,
		};
	}
	// async fetch() {

	// }
	componentDidMount() {
		axios
			.get("http://127.0.0.1:5000/api/questions")
			.then(res => res.data)
			.then(data => {
				console.log(data);
				this.setState({ quests: data, dataLoaded: true });
			})
			.catch(err => {
				console.log(err);
			});
		// this.fetch();
	}
	render() {
		// this.componentDidMount();
		const { quests, dataLoaded } = this.state;
		console.log(dataLoaded);
		return (
			<div className="container row center justify-content-center">
				<h1 className="col-12 text-center">Cbt Started</h1>
				<h3 className="col-12 text-center text-warning">
					{/* Remaining time: <Timer timeOut={100} /> */}
				</h3>
				<Question
					quest={
						dataLoaded ? quests[0] : { quest: "Hello", opts: [{}, {}, {}] }
					}
				/>
			</div>
		);
	}
}
