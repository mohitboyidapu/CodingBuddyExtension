/*global chrome*/


const createAndInjectLauncher = () => {
  console.log("Inside create launcher");
  const launcher = document.createElement("div");
  launcher.id = "cb_extension_launcher";
  launcher.textContent = "CodingBuddy";

  // Style the launcher button
  launcher.style.position = "fixed";
  launcher.style.bottom = "0px";
  launcher.style.right = "100px";
  launcher.style.background = "#333";
  launcher.style.color = "#fff";
  launcher.style.padding = "10px";
  launcher.style.borderRadius = "5px";
  launcher.style.cursor = "pointer";
  launcher.style.zIndex = "999999"; // Ensure it's above other content
  launcher.style.transition = "all 0.4s ease 0s";

  // Adding functionality
  launcher.addEventListener("click", toggleDisplayOfEditorContainer);

  // Append the launcher button to the body
  document.body.appendChild(launcher);
};

const createAndInjectEditorIframe = () => {
  // Editor Iframe is inside the Div
  // Div(id:cb_editor_outer_container) -> Iframe(id:cb_editor_iframe)
  console.log("Inside create iframe fun");
  const outerContainer = document.createElement("div");
  outerContainer.id = "cb_editor_outer_container";

  outerContainer.style.zIndex = "100000"; //increase this to INT_MAX
  // outerContainer.style.width = "300px"; // Should change width and height
  outerContainer.style.height = "100%";
  outerContainer.style.position = "fixed";
  // outerContainer.style.right = "-100%";
  outerContainer.style.right = "10px"; // After dev comment this line and uncomment top line
  outerContainer.style.top = "0px";
  outerContainer.style.transition = "all 0.4s ease 0s";
  outerContainer.style.display = "flex";
  outerContainer.style.justifyContent = "center";
  outerContainer.style.alignItems = "center";

  const shadowRoot = outerContainer.attachShadow({ mode: "open" });

  const editorIframe = document.createElement("iframe");
  editorIframe.src = chrome.runtime.getURL("../popup.html");
  editorIframe.id = "cb_editor_iframe";
  editorIframe.style.height = "80%";  
  editorIframe.style.width = "21rem";  
  editorIframe.style.border = "0px solid black";
  editorIframe.style.borderRadius = "1rem";
  editorIframe.style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 2px 4px 0px, rgba(0, 0, 0, 0.16) 0px 1px 4px 0px  ";



  shadowRoot.appendChild(editorIframe);

  // append outer container to Website
  document.body.appendChild(outerContainer);
};

const toggleDisplayOfEditorContainer = () => {
  console.log("inside Toggle Function");

  const outerContainer = document.getElementById("cb_editor_outer_container");
  if (outerContainer.style.right === "10px") {
    outerContainer.style.right = "-100%";
  } else {
    outerContainer.style.right = "10px";
  }
};

const afterPageLoad = () => {
  console.log("Timer completed");
  createAndInjectEditorIframe();
  createAndInjectLauncher();
};
// make this load after the page load
setTimeout(afterPageLoad, 1000);

// Handling Messages
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  console.log(request.action);
  if (request.action === "toggleDisplayOfIframe") {
    toggleDisplayOfEditorContainer();
    sendResponse({ message: "Display of Iframe toggled" });
  }
});
