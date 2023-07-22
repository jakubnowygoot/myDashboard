import { useState } from "react";
import DefaultInput from "../../../ui/inputs/DefaultInput";
import ToDoTasks from "./ToDoTasks";

function ToDoSection({ setTaskList, taskList, emptyTasks, setEmptyTasks }) {
  const [taskText, setTaskText] = useState("");

  const AddNewTask = () => {
    const newTask = {
      id: Math.random(),
      task: taskText,
    };
    const newNotes = [newTask, ...taskList];
    setTaskList(newNotes);
  };

  function NewTaskHandler(e) {
    if (e.key === "Enter" && taskText.length > 0) {
      AddNewTask();
      setEmptyTasks(false);
      setTaskText("");
    }
  }

  const DeleteTask = (id) => {
    setTaskList(taskList.filter((item) => item.id !== id));
    if (taskList.length === 1) {
      setEmptyTasks(true);
    }
  };

  return (
    <>
      <div className=" pb-2">
        <DefaultInput
          value={taskText}
          placeholder="Task to do"
          onChange={(e) => setTaskText(e.target.value)}
          onKeyDown={(e) => NewTaskHandler(e)}
        />
      </div>
      <div className="overflow-auto h-[48.3%]  pt-2 space-y-3.5">
        {emptyTasks ? (
          <>
            <hr />
            <h1 className="font-medium text-base xs:text-lg dark:text-white text-center">
              Add some tasks
            </h1>
          </>
        ) : null}
        <ToDoTasks taskList={taskList} DeleteTask={DeleteTask} />
      </div>
    </>
  );
}

export default ToDoSection;
