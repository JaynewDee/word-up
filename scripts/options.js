let bgColorDiv = document.getElementById("bg-color-div");
let textColorDiv = document.getElementById("text-color-div");

const presetBgColors = ["white", "black", "red", "blue", "green"];
const presetTextColors = ["white", "black"];

(async () => {
  renderOptions();
})();

async function handleBgBtnClick(e) {
  const selectedColor = e.target.style.backgroundColor;
  await chrome.storage.sync.get("settings", async (data) => {
    chrome.storage.sync.set({
      settings: {
        ...data.settings,
        bgColor: selectedColor
      }
    });
  });
}

async function handleTextBtnClick(e) {
  const selectedColor = e.target.style.backgroundColor;
  await chrome.storage.sync.get("settings", (data) => {
    chrome.storage.sync.set({
      settings: {
        ...data.settings,
        textColor: selectedColor
      }
    });
  });
}

function renderOptions() {
  function constructBgColors(bgColors) {
    bgColors.forEach((color) => {
      const colorBtn = document.createElement("button");
      colorBtn.classList.add("bg-color-btn");
      colorBtn.style.backgroundColor = color;
      bgColorDiv.appendChild(colorBtn);
      colorBtn.addEventListener("click", handleBgBtnClick);
    });
  }
  function constructTextColors(textColors) {
    textColors.forEach((color) => {
      const colorBtn = document.createElement("button");
      colorBtn.classList.add("text-color-btn");
      colorBtn.style.backgroundColor = color;
      textColorDiv.appendChild(colorBtn);
      colorBtn.addEventListener("click", handleTextBtnClick);
    });
  }
  constructBgColors(presetBgColors);
  constructTextColors(presetTextColors);
}
