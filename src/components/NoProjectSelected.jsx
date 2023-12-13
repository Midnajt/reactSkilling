import React from "react";

import noProjectImage from "../assets/no-projects.png";
import Button from "./UI/Button";

function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noProjectImage} alt="An empty task list" className="w-16 h-16 object-contain mx-auto"></img>
      <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
      <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
      <p className="mt-8">
        <Button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={onStartAddProject}>
          Create new project
        </Button>
      </p>
    </div>
  );
}

export default NoProjectSelected;
