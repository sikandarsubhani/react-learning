import React from "react";

function Note() {
  let notetitle = "This is Title";
  let notecontent = "This is content";

  return (
    <div className="note">
      <h1>{notetitle}</h1>
      <p>{notecontent}</p>
    </div>
  );
}
export default Note;
