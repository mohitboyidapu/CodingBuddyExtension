import "./App.css";
import "./Util/GlobalStyles.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import AddNotePage from "./Components/AddNotePage";
import NoteEditor from "./Components/NoteEditor";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <div className="Links_handler_Subnav">
          <Link to="/popup.html">Login</Link>
          <hr />
          <Link to="/AddNote">Add Note</Link>
          <hr />
          <Link to="/Editor">Editor</Link>
          <hr />
          <Link to="/profile">Preview Notes</Link>
        </div>
        <Routes>
          <Route exact path="/popup.html" element={<Login />} />
          <Route path="/AddNote" element={<AddNotePage />} />
          <Route path="/Editor" element={<NoteEditor />} />
          <Route path="*" element={<NotFound />} />

          {/* <Route exact path="/popup.html" element={<AddNotePage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
