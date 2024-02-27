import "./App.css";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [noteEntries, setNoteEntries] = useState([]);
  const [lastNoteId, setLastNoteId] = useState(-1);

  const onCreate = (newNote) => {
    const newEntry = { id: lastNoteId + 1, ...newNote };
    setNoteEntries([...noteEntries, newEntry]);
    setLastNoteId(lastNoteId + 1);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home noteEntries={noteEntries} />} />
        <Route path="/write" element={<Write onCreate={onCreate} />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
