import { useState, useCallback } from "react";
import Button from "../../../ui/Button";
import NotesSection from "./NotesSection";
import ToDoSwitch from "./ToDoSwitch";
import ToDoSection from "./ToDoSection";

function Notes() {
  const [createNote, setCreateNote] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [emptyNotes, setEmptyNotes] = useState(true);
  const [buttonChange, setButtonChange] = useState(false);
  const [showToDo, setShowToDo] = useState(false);
  const [notes, setNotes] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [emptyTasks, setEmptyTasks] = useState(true);

  const AddNewNote = () => {
    const newNote = {
      id: Math.random(),
      title,
      text,
    };
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
  };

  const EditNote = () => {
    if (title.length === 0) {
      return;
    }
    const tempArray = [...notes];
    const index = tempArray.findIndex((element) => element.id === id);
    tempArray[index] = {
      id: Math.random(),
      title,
      text,
    };
    setNotes(tempArray);
    setText("");
    setTitle("");
    setCreateNote(!createNote);
  };

  const ShowAndSaveNoteHandler = useCallback(() => {
    if (title.length === 0) {
      return;
    }
    if (notes.length === 0) {
      setEmptyNotes(false);
    }
    setButtonChange(false);
    setCreateNote(!createNote);
    AddNewNote();
    setText("");
    setTitle("");
  }, [createNote, title, text]);

  const ShowNoteHandler = useCallback(() => {
    setButtonChange(false);
    setCreateNote(!createNote);
  }, [createNote]);

  const ShowToDoHandler = useCallback(() => {
    setShowToDo(!showToDo);
    if (taskList.length === 1) {
      setEmptyNotes(true);
    }
  }, [showToDo]);

  const DeleteAllTasks = () => {
    setTaskList([]);
    setEmptyTasks(true);
  };

  const DeleteNotes = (e) => {
    setNotes(notes.filter((item) => item.id !== e));
    if (notes.length === 1) {
      setEmptyNotes(true);
    }
  };

  const ReturnButton = () => {
    setCreateNote(false);
  };

  return (
    <div className="flex p-4 justify-between flex-col rounded-l border-white bg-white dark:border-gray-700 border-2 h-96 dark:bg-gray-800">
      <div className="flex justify-between flex-row-reverse items-center">
        <svg className="w-6 h-6" />
        <h1 className="text-3xl font-bold dark:text-gray-300 text-center">
          {showToDo ? "Tasks" : "Notes"}
        </h1>
        {createNote ? (
          <button className="cursor-pointer" onClick={ReturnButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-6 h-6 cursor-pointer stroke-gray-400 dark:stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </button>
        ) : (
          <svg className="w-6 h-6 " />
        )}
      </div>
      {showToDo ? (
        <ToDoSection
          setTaskList={setTaskList}
          taskList={taskList}
          setEmptyTasks={setEmptyTasks}
          emptyTasks={emptyTasks}
        />
      ) : (
        <NotesSection
          notes={notes}
          setCreateNote={setCreateNote}
          createNote={createNote}
          title={title}
          setText={setText}
          setTitle={setTitle}
          setId={setId}
          setButtonChange={setButtonChange}
          text={text}
          emptyNotes={emptyNotes}
          DeleteNotes={DeleteNotes}
        />
      )}
      <div className=" flex justify-between">
        <ToDoSwitch ShowToDoHandler={ShowToDoHandler} />
        {showToDo ? (
          <Button onClick={DeleteAllTasks}>Clear all</Button>
        ) : (
          <div>
            {createNote ? (
              <div>
                {buttonChange ? (
                  <Button onClick={EditNote}>Update</Button>
                ) : (
                  <Button onClick={ShowAndSaveNoteHandler}>Save</Button>
                )}
              </div>
            ) : (
              <Button onClick={ShowNoteHandler}>Add</Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Notes;
