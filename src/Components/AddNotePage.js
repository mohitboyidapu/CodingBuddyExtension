import React from "react";

import Constants from "./../Constants/constants.js";
import "./../Util/GlobalStyles.css";
import { useNavigate } from "react-router-dom";

import "./AddNote.css";

const AddNotePage = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Editor");
  };

  const handleClick = () =>  {
    console.log("Clicked");
    handleNavigation();
  }


  return (
    <>
    <div className="addNoteContainer flex-center-col">
      <div className="Image_container flex-center-col ">
        <img
          className="Image"
          src="/AddNote-1.svg"
          alt="Notebook Animation"
        />
      </div>
      <button className="add_code_note_btn bg_animation_nav" onClick={handleClick}>+ Add CodeNote</button>
    </div>

    </>
  );
};

export default AddNotePage;
