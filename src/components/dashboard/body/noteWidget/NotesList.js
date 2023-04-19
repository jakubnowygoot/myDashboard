function NotesList({
  notes,
  createNote,
  setCreateNote,
  setText,
  setTitle,
  setId,
  setButtonChange,
  emptyNotes,
  DeleteNotes,
}) {
  function EditNote(note) {
    setButtonChange(true);
    setCreateNote(!createNote);
    setTitle(note.title);
    setText(note.text);
    setId(note.id);
  }

  return (
    <>
      {emptyNotes ? (
        <>
          <hr />
          <h1 className="font-medium text-base xs:text-lg dark:text-white text-center">
            No notes
          </h1>
        </>
      ) : null}
      {notes.map((note) => (
        <div className="flex justify-center items-center" key={Math.random()}>
          <div className="border-solid border-2 w-full rounded-3xl dark:bg-gray-700 dark:border-gray-600 cursor-pointer flex items-center justify-between">
            <button
              className="p-4 text-left break-all list-none w-full border-r-2 dark:border-gray-600"
              onClick={() => EditNote(note)}
            >
              <li className="font-medium text-base xs:text-lg dark:text-white ">
                {note.title}
              </li>
            </button>
            <button
              className="flex items-center cursor-pointer"
              onClick={() => DeleteNotes(note.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 m-3 cursor-pointer dark:stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default NotesList;
