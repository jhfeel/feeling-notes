import "./App.css";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
    // const { error } = await supabase
    //   .from("notes")
    //   .delete()
    //   .eq("id", targetNoteId);
    // if (error) {
    //   console.log("삭제 에러", error);
    // } else {
    //   console.log("삭제 성공");
    //   setUserNotes(
    //     userNotes.filter((note) => note.id !== Number(targetNoteId))
    //   );
    //   console.log(userNotes);
    // }
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
