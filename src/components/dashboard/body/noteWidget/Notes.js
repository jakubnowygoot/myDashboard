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
  const [emptyTittleNote, setEmptyTittleNote] = useState(false);
  const [getInput, setGetInput] = useState(false);

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
    setButtonChange(false);
  };

  const ShowAndSaveNoteHandler = useCallback(() => {
    if (title.length === 0) {
      setEmptyTittleNote(true);
      return;
    }
    if (notes.length === 0) {
      setEmptyNotes(false);
    }
    setEmptyTittleNote(false);
    setButtonChange(false);
    setCreateNote(!createNote);
    AddNewNote();
    setText("");
    setTitle("");
  }, [createNote, title, text]);

  const ShowToDoHandler = useCallback(() => {
    setShowToDo(!showToDo);
    setGetInput(!getInput);
    setCreateNote(false);
    if (taskList.length === 1) {
      setEmptyNotes(false);
    }
  }, [showToDo]);

  const DeleteAllTasks = () => {
    setTaskList([]);
    setNotes([]);
    setEmptyTasks(true);
    setEmptyNotes(true);
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
    <div className="flex flex-col justify-between rounded border-white bg-white dark:border-gray-700 border-2 h-96 dark:bg-gray-800 p-4">
      <div className="flex justify-between flex-row-reverse items-center">
        <svg className="w-6 h-6" />
        <h1 className="text-3xl font-bold dark:text-gray-300 text-center">
          {showToDo ? "Notes" : "Tasks"}
        </h1>
        {createNote ? (
          <button onClick={ReturnButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-5 h-5 cursor-pointer stroke-gray-400 dark:stroke-gray-400 hover:stroke-black dark:hover:stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-q   3"
              />
            </svg>
          </button>
        ) : (
          <svg className="w-5 h-5 " />
        )}
      </div>
      <ToDoSection
        setTaskList={setTaskList}
        taskList={taskList}
        setEmptyTasks={setEmptyTasks}
        emptyTasks={emptyTasks}
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
        emptyTittleNote={emptyTittleNote}
        getInput={getInput}
      />
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
        emptyTittleNote={emptyTittleNote}
      />
      <div className=" flex justify-between">
        <ToDoSwitch ShowToDoHandler={ShowToDoHandler} />
        <div>
          {buttonChange ? (
            <Button onClick={EditNote}>Update</Button>
          ) : (
            <>
              {" "}
              {createNote ? (
                <Button onClick={ShowAndSaveNoteHandler}>Save</Button>
              ) : (
                <Button onClick={DeleteAllTasks}>Clear</Button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Notes;
