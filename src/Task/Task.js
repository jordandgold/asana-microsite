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
		const listItemClasses = `${isHiddenClass} project__task-list-item task list-unstyled`;

		return (
			<li className={listItemClasses}>
				<div className="task__name">{this.props.name}</div>
				<ul className="task__options list-inline list-inline--left">
					<li><button className="ter-button ter-button--secondary ter-button--small" onClick={this.handleViewTask}>View Task</button></li>
					<li><button className="ter-button ter-button--outline ter-button--small" onClick={this.handleHideTask}>Hide</button></li>
				</ul>
			</li>
		)
	}
}

export default Task;