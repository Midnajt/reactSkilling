import React, { useRef } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";

function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitile = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (enteredTitile !== "" && enteredDescription !== "" && enteredDueDate !== "") {
      onAdd({
        title: enteredTitile,
        description: enteredDescription,
        dueDate: enteredDueDate,
      });
    }
  }

  return (
    <div className="pr-4 w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button className="text-stone-800 hover:text-stone-950">Cancel</Button>
        </li>
        <li>
          <Button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>
            Save
          </Button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" isTextarea={true} />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
}

export default NewProject;
