import "./App.css";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import { useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import SessionContext from "./contexts/SessionContext";
import Profile from "./pages/Profile";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [userNotes, setUserNotes] = useState([]);
  const { session } = useContext(SessionContext);

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
  }, [userNotes]);

  return (
    <Routes>
      <Route path="/login" element={<Login userNotes={userNotes} />} />
      <Route
        path="/"
        element={
          session ? <Home userNotes={userNotes} /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/profile"
        element={
          session ? <Profile userNotes={userNotes} /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/write"
        element={
          session ? (
            <Write onCreate={onCreate} userNotes={userNotes} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/edit/:id"
        element={
          session ? (
            <Edit userNotes={userNotes} onEdit={onEdit} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/detail/:id"
        element={
          session ? (
            <Detail userNotes={userNotes} onRemove={onRemove} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
}

export default App;
