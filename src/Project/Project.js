import React, { Component } from 'react';
import Task from '../Task/Task';

class Project extends Component {

	constructor(props) {
		super(props);

		this.state = {
			projectId: this.props.match.params.projectId,
			name: '',
			tasks: []
		};

	}

	fetchTasks = (projectId) => {

		const that = this;

		if (projectId) {

			// fetch project name
			fetch('https://app.asana.com/api/1.0/projects/' + this.state.projectId, {
				"headers" : {
					"Authorization": "Bearer 0/460d1530d3b0b60a3051ee2fbeeedb60"
				}
			})
			.then(function (response) {
				return response.json();
				// console.log(response);
			})
			.catch(function(error) {
				// console.log(error);
			})
			.then(function (result) {
				console.log(result);
				var projectInfo = result.data;
				that.setState({ name: projectInfo.name });
			});


			// fetch project tasks
			fetch('https://app.asana.com/api/1.0/projects/835440083893592/tasks?opt_expand=name', {
				"headers" : {
					"Authorization": "Bearer 0/460d1530d3b0b60a3051ee2fbeeedb60"
				}
			})
			.then(function (response) {
				return response.json();
				// console.log(response);
			})
			.catch(function(error) {
				// console.log(error);
			})
			.then(function (result) {
				console.log(result);
				var projectTasks = result.data;
				var newData = [];
				for (var i = 0; i < projectTasks.length; i++) {
					newData.push(projectTasks[i]);
				}
				that.setState({ tasks: newData });
			});
		}
	};

	componentDidMount () {
		this.fetchTasks(this.state.projectId);
	}

	render() {
		return (
			<div className="project">
				<div className="bg-light-1 pad-v-lg">
					<h2 className="project__title text-center">{this.state.name}</h2>
				</div>
				<div className="container-fluid narrow">
					<ul className="project__task-list">
						{this.state.tasks.map(task =>
						<Task name={task.name} id={task.id} />
						)}
	        		</ul>
        		</div>
			</div>
		);
	}
}

export default Project;