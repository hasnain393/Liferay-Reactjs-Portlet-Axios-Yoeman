import React, { useState } from "react";
import ReactDOM from "react-dom";

function Form(props) {
  const [newoption, setNewOption] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setNewOption(value);
  }

  function submitNote(event) {
    props.onAdd(newoption);
    setNewOption("");
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input name={newoption} value={newoption} onChange={handleChange} />
        <button onClick={submitNote}>submit</button>
      </form>
    </div>
  );
}

export default Form;
