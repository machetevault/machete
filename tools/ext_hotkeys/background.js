chrome.commands.onCommand.addListener((command) => {
  if (command === "paste-data-1") {
    pasteDataAtCursor("TEXTONE");
  } else if (command === "paste-data-2") {
    pasteDataAtCursor("TEXTTWO");
  } else if (command === "paste-data-3") {
    pasteDataAtCursor("TEXTTHREE");
  } else if (command === "open-predefined-tab") {
    openPredefinedTab();
  }
});

function pasteDataAtCursor(dataToPaste) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: (data) => {
        const activeElement = document.activeElement;
        if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
          activeElement.value += data;
        }
      },
      args: [dataToPaste]
    });
  });
}

function openPredefinedTab() {
  const predefinedUrl = "https://www.machetevault.com"; // Change this to your desired URL
  chrome.tabs.create({ url: predefinedUrl });
}