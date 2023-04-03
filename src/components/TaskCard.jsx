import React from "react";
import { FaTrashAlt } from 'react-icons/fa'

export function TaskCard({task, deleteTask, toggleTask}) {
   return (
      <div className="card rounded bg-[#42425c] text-lg p-2 min-w-[16rem] mt-2">
         <div className="card-body flex items-center gap-2">
            <input type="checkbox" className="outline-none" checked={task.completed} onChange={() => toggleTask(task)}/>
            <h5 className="card-title text-white font-semibold mr-auto">{task.title}</h5>
            <FaTrashAlt className="cursor-pointer hover:text-red-600" onClick={() => deleteTask(task.id)}/>
         </div>
      </div>
   );
}