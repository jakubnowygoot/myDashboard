function NotesList({
  notes,
  createNote,
  setCreateNote,
  setText,
  setTitle,
  setId,
  setShow,
}) {
  function EditNote(note) {
    setShow(true);
    setCreateNote(!createNote);
    setTitle(note.title);
    setText(note.text);
    setId(note.id);
  }

  return (
    <>
      {notes.map((note) => (
        <button
          key={Math.random()}
          onClick={() => EditNote(note)}
          className="border-solid border-2 w-full rounded-3xl dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
        >
          <ul className="p-4 text-left">
            <li className="font-medium text-base xs:text-lg dark:text-white">
              {note.title}
            </li>
          </ul>
        </button>
      ))}
    </>
  );
}

export default NotesList;
