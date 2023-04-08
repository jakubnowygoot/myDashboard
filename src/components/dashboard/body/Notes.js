import { useState, useCallback } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import NotesList from "./NotesList";

function Notes() {
  const [createNote, setCreateNote] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const [notes, setNotes] = useState([
    {
      title: "shopping list",
      text: "get bread",
    },
    {
      title: "2",
      text: "test",
    },
    {
      title: "3",
      text: "test",
    },
    {
      title: "4",
      text: "test test",
    },
    {
      title: "5",
      text: "test test test test",
    },
  ]);

  const AddNewNote = () => {
    const newNote = {
      title,
      text,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  function ShowAndSaveNoteHandler() {
    setCreateNote(!createNote);
    AddNewNote();
    setText("");
    setTitle("");
  }

  const ShowNoteHandler = useCallback(() => {
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
            <Input
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              value={text}
              className="h-4/6 rounded-lg bg-gray-50 w-full resize-none border-gray-300 border-solid border outline-primary-600 pl-2.5"
              id="story"
              name="story"
              onChange={(e) => setText(e.target.value)}
            />
          </>
        ) : (
          <NotesList title={title} text={text} notes={notes} />
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
          // eslint-disable-next-line react/jsx-no-bind
          <Button onClick={ShowAndSaveNoteHandler}>Save</Button>
        ) : (
          <Button onClick={ShowNoteHandler}>Add</Button>
        )}
      </div>
    </div>
  );
}

export default Notes;
