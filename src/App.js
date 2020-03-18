import React, { useState, useEffect } from "react";
import "./App.css";
import Page from "./components/page";
import FormUser from "./components/form";

function App() {
  const [preview, setPreview] = useState(false);
  const [form, setForm] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      let obj = JSON.parse(localStorage.getItem("user"));
      console.log(obj);
      setForm(obj);
    } else
      setForm({
        name: "",
        birthday: "",
        address: "",
        city: ""
      });
  }, []);

  function handleform(form) {
    setForm(form);
    setPreview(true);
  }

  return (
    <div className="App">
      {preview && form ? (
        <Page form={form} />
      ) : (
        <FormUser form={form} handleform={handleform} />
      )}
    </div>
  );
}

export default App;
