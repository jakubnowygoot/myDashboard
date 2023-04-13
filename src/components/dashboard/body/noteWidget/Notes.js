import { useState, useCallback } from "react";
import Button from "../../../ui/Button";
import DefaultInput from "../../../ui/inputs/DefaultInput";
import NotesList from "./NotesList";

function Notes() {
  const [createNote, setCreateNote] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);
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

  return (
    <div className="rounded-l border-white bg-white dark:border-gray-700 border-2 h-96  dark:bg-gray-800 ">
      <h1 className="text-xl xs:text-3xl font-bold dark:text-gray-300 text-center p-4">
        Notes
      </h1>

      <div className="overflow-auto h-[63.5%] p-4 space-y-3.5">
        {createNote ? (
          <>
            <DefaultInput
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              value={text}
              className="h-4/6 rounded-lg bg-gray-50 w-full resize-none border-gray-300 border-solid border outline-primary-600 pl-2.5"
              onChange={(e) => setText(e.target.value)}
            />
          </>
        ) : (
          <NotesList
            notes={notes}
            setCreateNote={setCreateNote}
            createNote={createNote}
            title={title}
            setText={setText}
            setTitle={setTitle}
            setId={setId}
            setShow={setShow}
          />
        )}
      </div>
      <div className="p-4 flex justify-between">
        <div className="flex justify-center items-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600" />
          </label>
          <span className="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            To do
          </span>
        </div>
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
