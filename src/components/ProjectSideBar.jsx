import React from "react";
import Button from "./UI/Button";

function ProjectSidebar({ onStartAddProject, projects }) {
  return (
    <aside className="shadow-xl w-1/3 px-8 py-16 bg-stone-900 text-stone-400 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <div>
        <Button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={onStartAddProject}>
          + Add project
        </Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">{project.title}</button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ProjectSidebar;
