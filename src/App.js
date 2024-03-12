import "./App.css";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

function App() {
  const [noteEntries, setNoteEntries] = useState(() => {
    const notesData = localStorage.getItem("Feeling Notes");
    return notesData ? JSON.parse(notesData) : [];
  });
  const [lastNoteId, setLastNoteId] = useState(() => {
    const lastIndex = noteEntries.length - 1;
    const lastNote = noteEntries[lastIndex];
    return lastNote ? lastNote.id : -1;
  });

  const [userNotes, setUserNotes] = useState([]);

  useEffect(() => {
    getUserNotes();
  }, []);

  async function getUserNotes() {
    const { data } = await supabase.from("notes").select();
    setUserNotes(data);
  }

  useEffect(() => {
    localStorage.setItem("Feeling Notes", JSON.stringify(noteEntries));
  }, [noteEntries]);

  const onCreate = (newNote) => {
    const newEntry = { id: lastNoteId + 1, ...newNote };

    setNoteEntries([...noteEntries, newEntry]);
    setLastNoteId(lastNoteId + 1);
  };

  const onEdit = (targetNoteId, EditedNote) => {
    setNoteEntries(
      noteEntries.map((entry) =>
        entry.id === targetNoteId ? { id: targetNoteId, ...EditedNote } : entry
      )
    );
  };

  const onRemove = (targetNoteId) => {
    setNoteEntries(
      noteEntries.filter((note) => note.id !== Number(targetNoteId))
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home userNotes={userNotes} />} />
        <Route
          path="/write"
          element={<Write onCreate={onCreate} noteEntries={noteEntries} />}
        />
        <Route
          path="/edit/:id"
          element={<Edit noteEntries={noteEntries} onEdit={onEdit} />}
        />
        <Route
          path="/detail/:id"
          element={<Detail noteEntries={noteEntries} onRemove={onRemove} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
