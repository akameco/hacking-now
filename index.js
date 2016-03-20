import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {alerts: []};
	}

	componentDidMount() {
		setInterval(() => {
			const top = Math.floor(Math.random() * screen.height);
			const left = Math.floor(Math.random() * screen.width);
			this.setState({alerts: [...this.state.alerts, [top, left]]});
		}, 100);
	}

	render() {
		const images = ['./res/danger.png', './res/warning.png'];
		const alerts = this.state.alerts.map((e, i) =>
			<Alert key={i} src={images[i % 2]} top={e[0]} left={e[1]}/>
		);

		return (
			<div>
				{alerts}
			</div>
		);
	}
}

const Alert = ({src, top, left}) => (
	<img
		src={src}
		style={{
			position: 'absolute',
			top: top,
			left: left,
			boxShadow: '2px 4px 5px 5px rgba(0,0,0,0.1),2px 2px 5px 5px rgba(0,0,0,0.1)',
			transform: 'translate(-50%, -50%)'
		}}
		/>
);

Alert.propTypes = {
	src: PropTypes.string.isRequired,
	top: PropTypes.number.isRequired,
	left: PropTypes.number.isRequired
};

render(<App/>, document.querySelector('#main'));
