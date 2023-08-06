import DefaultInput from "../../../ui/inputs/DefaultInput";

function NotesSection({
  createNote,
  title,
  setText,
  setTitle,
  text,
  emptyTittleNote,
}) {
  return (
    <>
      {" "}
      {createNote ? (
        <div className="overflow-auto h-[73.8%]  space-y-3.5">
          <DefaultInput
            value={title}
            placeholder={`${emptyTittleNote ? "Invalid title" : "Title"}`}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={text}
            className="h-4/6 rounded-lg bg-gray-50 w-full resize-none border-gray-300 border-solid border outline-primary-600 pl-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:outline-none dark:text-white"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      ) : null}
    </>
  );
}

export default NotesSection;
