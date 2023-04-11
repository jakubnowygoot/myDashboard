function NotesList({ notes, createNote, setCreateNote, setText, setTitle }) {
  function test(note) {
    setCreateNote(!createNote);
    setTitle(note.title);
    setText(note.text);
  }

  return (
    <>
      {notes.map((note) => (
        <button
          key={Math.random()}
          onClick={() => test(note)}
          className="border-solid border-2 w-full rounded-3xl dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
        >
          <ul className="p-4 text-left">
            <li
              className="font-medium text-base xs:text-lg dark:text-white"
              value={note.title}
            >
              {note.title}
            </li>
          </ul>
        </button>
      ))}
    </>
  );
}

export default NotesList;
