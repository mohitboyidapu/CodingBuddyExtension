import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const NoteEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  return (
    <>
      <div>NoteEditor</div>
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => {
          setContent(newContent);
          console.log(newContent);
        }}
      />
    </>
  );
};

export default NoteEditor;
