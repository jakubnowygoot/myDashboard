import { useState } from "react";

function NotesList() {
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
  console.log(setNotes);

  return (
    <>
      {notes.map((note) => (
        <div className="border-solid border-2 w-full rounded-3xl dark:bg-gray-700 dark:border-gray-600">
          <ul className="p-4">
            <li className="font-medium text-base xs:text-lg dark:text-white">
              {note.title}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default NotesList;
