import { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // null:kiedy chcemy dodać nowy projekt, undefined: nie dodajemy i nie wybralismy zadnego projektu;
    projects: [],
  });

  // console.log(projectsState);

  function handleStartAddProject() {
    // uruchamia okno z mozliwowscia dodania projektu
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: null }; //ustawienie na null zmieni widok
    });
  }

  function handleAddProject(projectData) {
    // wywolywany gdy dodajemy projekt
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData, // wstawi w obiekt wartosci z inputow
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined, //dzieki tej wartosci przywracamy widok domyslny
        projects: [...prevState.projects, newProject], //dodajemy task do listy taskow
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} />
      {content}
    </main>
  );
}

export default App;
