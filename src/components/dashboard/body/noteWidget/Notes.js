import { useState, useCallback, useEffect } from "react";
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
  const [emptyTasks, setEmptyTasks] = useState(true);
  const [emptyTittleNote, setEmptyTittleNote] = useState(false);
  const [taskText, setTaskText] = useState("");
  const [showToDo, setShowToDo] = useState(
    JSON.parse(localStorage.getItem("showToDo")) || false
  );
  const [notes, setNotes] = useState(() => {
    const savedStateNotes = localStorage.getItem("notesData");
    const notesData = JSON.parse(savedStateNotes);
    return notesData || [];
  });
  const [taskList, setTaskList] = useState(() => {
    const savedStateToDo = localStorage.getItem("toDoData");
    const toDoData = JSON.parse(savedStateToDo);
    return toDoData || [];
  });
  const [getInput, setGetInput] = useState(
    JSON.parse(localStorage.getItem("setInputVal")) || false
  );

  useEffect(() => {
    localStorage.setItem("setInputVal", JSON.stringify(getInput));
  }, [getInput]);
  useEffect(() => {
    localStorage.setItem("showToDo", JSON.stringify(showToDo));
  }, [showToDo]);
  useEffect(() => {
    localStorage.setItem("notesData", JSON.stringify(notes));
  }, [notes]);
  useEffect(() => {
    localStorage.setItem("toDoData", JSON.stringify(taskList));
  }, [taskList]);
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
    setTaskText("");
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
    setText("");
    setTitle("");
    setCreateNote(false);
    setButtonChange(false);
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
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
        emptyNotes={emptyNotes}
        DeleteNotes={DeleteNotes}
        getInput={getInput}
        setTaskText={setTaskText}
        taskText={taskText}
      />
      <NotesSection
        notes={notes}
        createNote={createNote}
        setText={setText}
        setTitle={setTitle}
        text={text}
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
