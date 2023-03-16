const settings = {
  bgColor: "black",
  textColor: "white"
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ settings });
});
