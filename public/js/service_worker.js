/*global chrome*/

// Send message to active tab whenever the icon is clicked
chrome.action.onClicked.addListener(() => {
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
});

