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
  const [userNotes, setUserNotes] = useState([]);

  const getUserNotes = async () => {
    const { data } = await supabase.from("notes").select();
    setUserNotes(data);
  };

  useEffect(() => {
    getUserNotes();
  }, []);

  const onCreate = async (newNote) => {
    const { data, error } = await supabase
      .from("notes")
      .insert({ ...newNote })
      .select();
    if (error) {
      console.log("삽입 에러", error);
    } else {
      console.log("삽입 성공", data);
      setUserNotes([...userNotes, ...data]);
    }
  };

  const onEdit = async (targetNoteId, EditedNote) => {
    const { data, error } = await supabase
      .from("notes")
      .update({ ...EditedNote })
      .eq("id", targetNoteId)
      .select();

    if (error) {
      console.log("수정 에러", error);
    } else {
      console.log("수정 성공", data);
      setUserNotes(
        userNotes.map((note) =>
          note.id === targetNoteId ? { id: targetNoteId, ...EditedNote } : note
        )
      );
    }
  };

  const onRemove = async (targetNoteId) => {
    const { error } = await supabase
      .from("notes")
      .delete()
      .eq("id", targetNoteId);

    if (error) {
      console.log("삭제 에러", error);
    } else {
      console.log("삭제 성공");
      setUserNotes(
        userNotes.filter((note) => note.id !== Number(targetNoteId))
      );
      console.log(userNotes);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
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
  );
}

export default App;
