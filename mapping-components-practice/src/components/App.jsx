import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createCard(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {Array.isArray(emojipedia)
          ? emojipedia.map(createCard)
          : "No Data Avaiable"}
      </dl>
    </div>
  );
}

export default App;
