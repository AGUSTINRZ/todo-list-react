import React from "react";
import { useState, useEffect } from "react";
import { TaskCard } from "./components/TaskCard";
import { TaskCreator } from "./components/TaskCreator";
import { TaskList } from "./components/TaskList";
import "./App.css";

function App() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		let data = localStorage.getItem("tasks");
		if (data) {
			setTasks(JSON.parse(data));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	function createTask(title) {
		setTasks([
			...tasks,
			{
				id: tasks.length,
				title: title,
				completed: false,
			},
		]);
	}

	function deleteTask(index) {
		setTasks(tasks.filter((task) => task.id !== index));
	}

	function toggleTask(task) {
		setTasks(
			tasks.map((t) =>
				t.id == task.id ? { ...t, completed: !t.completed } : t
			)
		);
	}

	return (
		<div className="App">
			<div className="bg-[#24273d] p-2 rounded text-white m-2">
				<h1 className="text-3xl font-semibold mb-2">Todo App</h1>
				<TaskCreator createTask={createTask} />
				<TaskList
					tasks={tasks}
					deleteTask={deleteTask}
					toggleTask={toggleTask}
				/>
				<TaskList
					tasks={tasks}
					deleteTask={deleteTask}
					toggleTask={toggleTask}
					showCompleted={true}
				/>
			</div>
		</div>
	);
}
export default App;
