import React, { Component } from 'react';
import './Task.css';

class Task extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isHidden: false
		};

	}

	handleHideTask = () => {
        this.setState({ isHidden: true });
    }

    handleViewTask = () => {
    	const taskUrl = 'https://app.asana.com/0/835440083893592/' + this.props.id +'/f';
    	window.location = taskUrl;
    }

	render() {

		const isHiddenClass = this.state.isHidden ? 'hidden' : '';
		const listItemClasses = `${isHiddenClass} project__task-list-item list-unstyled`;

		return (
			<li className={listItemClasses}>
				{this.props.name}
				<button className="ter-button ter-button--primary" onClick={this.handleViewTask}>View Task</button>
				<button className="ter-button ter-button--outline" onClick={this.handleHideTask}>Hide</button>
			</li>
		)
	}
}

export default Task;