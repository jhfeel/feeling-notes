import "./App.css";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { createClient } from "@supabase/supabase-js";
import UserProvider from "./contexts/UserProvider";
import UserContext from "./contexts/UserContext";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [userNotes, setUserNotes] = useState([]);

  const getUserNotes = async () => {
    const { data, error } = await supabase.from("notes").select("*");

    if (error) {
      console.error("노트 불러오는 중 에러", error.message);
    }

    setUserNotes(data);
  };

  const onCreate = async (newNote) => {
    const { error } = await supabase.from("notes").insert(newNote).select("*");

    if (error) {
      console.error("노트 작성 중 에러", error.message);
    }

    setUserNotes([...userNotes, newNote]);
  };

  const onEdit = async (targetNoteId, editedNote) => {
    const { data, error } = await supabase
      .from("notes")
      .update({ ...editedNote })
      .eq("id", targetNoteId)
      .select("*");

    if (error) {
      console.error("노트 수정 중 에러", error.message);
    }

    setUserNotes(
      userNotes.map((note) =>
        note.id === targetNoteId ? { id: targetNoteId, ...editedNote } : note
      )
    );
  };

  const onRemove = async (targetNoteId) => {
    const { error } = await supabase
      .from("notes")
      .delete("*")
      .eq("id", Number(targetNoteId));

    if (error) {
      console.error("노트 삭제 중 에러", error);
    }

    setUserNotes(userNotes.filter((note) => note.id !== Number(targetNoteId)));
  };

  useEffect(() => {
    getUserNotes();
  }, []);

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home userNotes={userNotes} />} />
          <Route
            path="/write"
            element={<Write onCreate={onCreate} userNotes={userNotes} />}
          />
          <Route
            path="/edit/:id"
            element={<Edit userNotes={userNotes} onEdit={onEdit} />}
          />
          <Route
            path="/detail/:id"
            element={<Detail userNotes={userNotes} onRemove={onRemove} />}
          />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
