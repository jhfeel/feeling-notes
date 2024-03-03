import "./App.css";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [noteEntries, setNoteEntries] = useState([]);
  const [lastNoteId, setLastNoteId] = useState(-1);

  useEffect(() => {
    const notesData = localStorage.getItem("Feeling Notes");

    if (notesData === null) {
      localStorage.setItem("Feeling Notes", JSON.stringify([]));
    } else {
      setNoteEntries(JSON.parse(notesData));
    }
  }, []);

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
      noteEntries.map((entry) => {
        return (entry =
          entry.id === targetNoteId
            ? { id: targetNoteId, ...EditedNote }
            : entry);
      })
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
        <Route path="/" element={<Home noteEntries={noteEntries} />} />
        <Route path="/write" element={<Write onCreate={onCreate} />} />
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
