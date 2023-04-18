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
  const [show, setShow] = useState(false);
  const [showToDo, setShowToDo] = useState(false);
  const [notes, setNotes] = useState([]);

  const AddNewNote = () => {
    const newNote = {
      id: Math.random(),
      title,
      text,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const EditNote = () => {
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
    setShow(false);
    setCreateNote(!createNote);
    AddNewNote();
    setText("");
    setTitle("");
  }, [createNote, title, text]);

  const ShowNoteHandler = useCallback(() => {
    setShow(false);
    setCreateNote(!createNote);
  }, [createNote]);

  const ShowToDoHandler = useCallback(() => {
    setShowToDo(!showToDo);
  }, [showToDo]);

  return (
    <div className="rounded-l border-white bg-white dark:border-gray-700 border-2 h-96 dark:bg-gray-800">
      <h1 className="text-xl xs:text-3xl font-bold dark:text-gray-300 text-center p-4">
        {showToDo ? "Tasks" : "Notes"}
      </h1>
      {showToDo ? (
        <ToDoSection />
      ) : (
        <NotesSection
          notes={notes}
          setCreateNote={setCreateNote}
          createNote={createNote}
          title={title}
          setText={setText}
          setTitle={setTitle}
          setId={setId}
          setShow={setShow}
          text={text}
        />
      )}
      <div className="p-4 flex justify-between">
        <ToDoSwitch ShowToDoHandler={ShowToDoHandler} />
        {createNote ? (
          <div>
            {show ? (
              <Button onClick={EditNote}>Update</Button>
            ) : (
              <Button onClick={ShowAndSaveNoteHandler}>Save</Button>
            )}
          </div>
        ) : (
          <Button onClick={ShowNoteHandler}>Add</Button>
        )}
      </div>
    </div>
  );
}

export default Notes;
