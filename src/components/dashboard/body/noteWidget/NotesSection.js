import DefaultInput from "../../../ui/inputs/DefaultInput";
import NotesList from "./NotesList";

function NotesSection({
  notes,
  setCreateNote,
  createNote,
  title,
  setText,
  setTitle,
  setId,
  setButtonChange,
  text,
  emptyNotes,
  DeleteNotes,
}) {
  return (
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
            className="h-4/6 rounded-lg bg-gray-50 w-full resize-none border-gray-300 border-solid border outline-primary-600 pl-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:outline-none dark:text-white"
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
          setButtonChange={setButtonChange}
          emptyNotes={emptyNotes}
          DeleteNotes={DeleteNotes}
        />
      )}
    </div>
  );
}

export default NotesSection;
