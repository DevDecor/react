import React from "react";
// import PropTypes from "prop-types";
let shuffle = par => {
	return par.sort(() => {
		return Math.random() > 0.5 ? 1 : -1;
	});
};
// const propTypes = {};

// const defaultProps = {};

export default class Options extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			opts: shuffle(props.options),
		};
	}

	render() {
		let { opts } = this.state;
		return (
			<form>
				{opts.map((e, i) => {
					return (
						<div className="form-group" key={"name" + i}>
							<label>
								<input type="radio" name="nn" value={e.id} />
								{e.opt}
							</label>
						</div>
					);
				})}
				<div className="btn-group">
					<button className="btn btn-primary">&lt; &lt; Prev </button>
					{/* <button>Next &gt; &gt;</button> */}
					<button className="btn btn-primary">Next &gt; &gt;</button>
				</div>
			</form>
		);
	}
}

// options.propTypes = propTypes;
// options.defaultProps = defaultProps;
