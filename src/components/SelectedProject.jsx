import React from "react";
import Tasks from "./Tasks";

function SelectedProject({ tasks, project, onDelete, onAddTask, onDeleteTask }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("pl-PL", {
    year: "2-digit",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="pr-4 w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
          <button className="text-stone-600 hover:text-stone-950" onClick={onDelete}>
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}

export default SelectedProject;
