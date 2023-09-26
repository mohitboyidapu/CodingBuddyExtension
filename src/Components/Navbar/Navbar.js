/*global chrome*/
import React from "react";
import "../Utils/styleutils.css";
import "./Navbar.css";

const Navbar = () => {
  const sendCloseMessageToContentScript = () => {
    (async () => {
      const [tab] = await chrome.tabs.query({
        active: true,
        lastFocusedWindow: true,
      });
      const response = await chrome.tabs.sendMessage(tab.id, {
        action: "toggleDisplayOfIframe",
      });
      // do something with response here, not outside the function
      console.log(response);
    })();
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#" className="logo">
            Coding Buddy
          </a>
        </div>
        <ul class="nav-links">
          <li>
            <button
              id="closeEditorButton"
              onClick={sendCloseMessageToContentScript}
            >
              X
            </button>
          </li>
        </ul>
      </nav>
      {/* <nav className="navbar">
        <div className="nav_logo">CodingBuddy</div>
        <div className="nav_links">
          <button
            id="closeEditorButton"
            onClick={sendCloseMessageToContentScript}
          >
            x
          </button>
          <button id="moveEditorButton">👋🏻</button>
        </div>
      </nav> */}
    </>
  );
};

export default Navbar;
