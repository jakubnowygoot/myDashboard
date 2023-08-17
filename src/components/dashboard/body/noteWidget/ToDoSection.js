import { useCallback } from "react";
import ToDoTasks from "./ToDoTasks";
import NotesList from "./NotesList";

function ToDoSection({
  setTaskList,
  taskList,
  setEmptyTasks,
  notes,
  setCreateNote,
  createNote,
  setText,
  setTitle,
  setId,
  setButtonChange,
  DeleteNotes,
  getInput,
  setTaskText,
  taskText,
}) {
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

  const getNote = useCallback(() => {
    setCreateNote(true);
  }, []);

  return (
    <>
      {" "}
      {createNote ? null : (
        <>
          <div className="pb-2">
            <div>
              {getInput ? (
                <label className="block mb-2 text-sm text-gray-900 dark:text-white">
                  <input
                    onClick={getNote}
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    onKeyDown={(e) => NewTaskHandler(e)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 outline-none sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:outline-none"
                    placeholder="Write a note"
                    required
                  />
                </label>
              ) : (
                <label className="block mb-2 text-sm text-gray-900 dark:text-white">
                  <input
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    onKeyDown={(e) => NewTaskHandler(e)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 outline-none sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:outline-none"
                    placeholder="Task to do"
                    required
                  />
                </label>
              )}
            </div>
          </div>
          <div className="overflow-auto h-[48.3%] overflow-anywhere	pt-2 space-y-3.5">
            {taskList.length === 0 && notes.length === 0 ? (
              <>
                <hr />
                <h1 className="font-medium text-base xs:text-lg dark:text-white text-center">
                  Empty list
                </h1>
              </>
            ) : null}
            <ToDoTasks taskList={taskList} DeleteTask={DeleteTask} />
            <NotesList
              notes={notes}
              setCreateNote={setCreateNote}
              createNote={createNote}
              setText={setText}
              setTitle={setTitle}
              setId={setId}
              setButtonChange={setButtonChange}
              DeleteNotes={DeleteNotes}
            />
          </div>
        </>
      )}
    </>
  );
}

export default ToDoSection;
