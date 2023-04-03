import React from "react";
import { TaskCard } from "./TaskCard";

export function TaskList({tasks, deleteTask, toggleTask, showCompleted = false}) {

   function cards(completedValue) {
      return (
         tasks
         .filter((task) => task.completed === completedValue)
         .map((task, index) => (
            <TaskCard key={index} task={task} deleteTask={deleteTask} toggleTask={toggleTask}/>
         ))
      )
   }

   if (tasks.length === 0 && !showCompleted) {
      return <h3 className="font-semibold mt-1">No hay tareas aún</h3>
   }
   
   if (showCompleted) {
      return (
         <>
            <h3 className="font-semibold mt-1">Tareas Completadas ({tasks.filter(task => task.completed).length} / {tasks.length})</h3>
            {
               cards(showCompleted)
            }
         </>
      )
   } else {
      return (
         <>
            <h3 className="font-semibold mt-1">Tareas Pendientes</h3>
            {cards(showCompleted)}
         </>
      )
   }
}