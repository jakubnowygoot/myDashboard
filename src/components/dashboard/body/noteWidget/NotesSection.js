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
  setShow,
  text,
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
  );
}

export default NotesSection;
