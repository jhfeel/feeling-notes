import "./App.css";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { createClient } from "@supabase/supabase-js";
import UserProvider from "./contexts/UserProvider";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [userNotes, setUserNotes] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/getUserNotes")
      .then((response) => response.json())
      .then((result) => {
        setUserNotes(result);
      });
  }, []);

  const onCreate = async (newNote) => {
    fetch(process.env.REACT_APP_API_URL + "/createNote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    })
      .then((response) => response.json())
      .then((result) => setUserNotes([...userNotes, ...result]));
  };

  const onEdit = async (targetNoteId, editedNote) => {
    setUserNotes(
      userNotes.map((note) =>
        note.id === targetNoteId ? { id: targetNoteId, ...editedNote } : note
      )
    );
    fetch(process.env.REACT_APP_API_URL + "/editNote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ targetNoteId, editedNote }),
    }).catch((error) => {
      console.error("수정 중 오류 발생:", error);
    });
  };

  const onRemove = async (targetNoteId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/removeNote`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: targetNoteId }),
        }
      );
      if (response.ok) {
        setUserNotes(
          userNotes.filter((note) => note.id !== Number(targetNoteId))
        );
      } else {
        console.error("서버에서 오류 응답을 받았습니다.");
      }
    } catch (error) {
      console.error("삭제 중 오류 발생:", error);
    }
  };

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home userNotes={userNotes} />} />
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
