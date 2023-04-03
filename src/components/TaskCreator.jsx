import React from "react";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

export function TaskCreator({ createTask }) {
   const [title, setTitle] = useState('')

   function handleSubmit(e) {
      e.preventDefault();
      if (title !== ''){
         createTask(title);
         setTitle("");

      }
   }

   return (
      <form onSubmit={(e) => handleSubmit(e)} className="flex text-lg">
         <input autoFocus type="text" placeholder="Enter a task..." onChange={(e) => setTitle(e.target.value)} value={title} className="text-black rounded-l w-full px-2 outline-none font-semibold placeholder:font-semibold" id="input-task"/>
         <button className="rounded-r bg-green-400 text-white font-semibold hover:bg-green-500 transition-colors flex p-2 items-center gap-2 outline-none">Add <FaCheck/></button>
      </form>
   )
}