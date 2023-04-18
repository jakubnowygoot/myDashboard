import { useState } from "react";
import DefaultInput from "../../../ui/inputs/DefaultInput";
import ToDoTasks from "./ToDoTasks";

function ToDoSection() {
  const [taskText, setTaskText] = useState("");
  const [task, setTask] = useState([]);

  const AddNewTask = () => {
    const newTask = {
      id: Math.random(),
      task: taskText,
      style: "",
    };
    const newNotes = [newTask, ...task];
    setTask(newNotes);
  };

  function handleKeyPress(enter) {
    if (enter.key === "Enter" && taskText.length > 0) {
      AddNewTask();
      setTaskText("");
    }
  }

  return (
    <>
      <div className="px-4 pb-2">
        <DefaultInput
          value={taskText}
          placeholder="Task to do"
          onChange={(e) => setTaskText(e.target.value)}
          onKeyUp={(enter) => handleKeyPress(enter)}
        />
      </div>
      <div className="overflow-auto h-[48.3%] p-4 pt-2 space-y-3.5">
        <ToDoTasks task={task} />
      </div>
    </>
  );
}

export default ToDoSection;
