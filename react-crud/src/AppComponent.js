import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToDoList from "./components/ToDoList";
import Form from "./components/Form";
import GetUser from './components/GetUser'
import DeleteIcon from "@material-ui/icons/Delete";


function AppComponent() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    console.log(notes);
  }
  function DeleteNote(id) {
    setNotes((prevNotes) => {
      return notes.filter((noteItem, index) => {
        return noteItem !== id;
      });
    });
  }
  function removeAll() {
    setNotes([]);
  }

  return (
    <div>
      <Header />
      <Form onAdd={addNote} />
      {notes.map((note) => {
        return (
          <ToDoList key={note} id={note} list={note} onDelete={DeleteNote} />
        );
      })}
      <GetUser />

       <Footer />
    </div>
  );
}

export default AppComponent;
