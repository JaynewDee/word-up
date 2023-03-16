const analyzePage = document.getElementById("analyze-page");
const customize = document.getElementById("customize");

analyzePage.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: analyze
  });
});

customize.addEventListener("click", async (e) => {
  chrome.runtime.openOptionsPage();
});

async function analyze() {
  let omegaString = "";
  let letterCount = 0;
  let wordCount = 0;
  let sentenceCount = 0;
  chrome.storage.sync.get("settings", ({ settings }) => {
    document.body.style.backgroundColor = settings.bgColor;
    document.body.style.color = settings.textColor;
  });

  let paragraphs = Array.from(document.querySelectorAll("p"));
  paragraphs.forEach((paragraph) => {
    omegaString += paragraph.innerText;
  });
  document.body.innerHTML = "";

  function isAlpha(char) {
    return /^[A-Z|a-z]$/i.test(char);
  }

  let cleanThread = omegaString.replaceAll(/[\r\n\d|)|(||{|}|[|\]|-|,]/g, "");

  let omegaArray = cleanThread.split("");
  let i = 0;
  while (i < omegaArray.length) {
    if (isAlpha(omegaArray[i])) {
      letterCount += 1;
    }
    if (
      omegaArray[i] == " " &&
      (isAlpha(omegaArray[i - 1]) ||
        omegaArray[i - 1] == ";" ||
        omegaArray[i] == "," ||
        omegaArray[i] == ":" ||
        omegaArray[i] == "'" ||
        omegaArray[i].toUpperCase() == omegaArray[i])
    ) {
      wordCount += 1;
    }
    if (omegaArray[i] == "." && omegaArray[i + 1] == " ") {
      sentenceCount += 1;
    }
    i++;
  }
  const cli =
    0.0588 * ((letterCount / wordCount) * 100) -
    0.296 * ((sentenceCount / wordCount) * 100) -
    15.8;

  document.body.classList = "";
  document.body.id = "analysis-body";
  let newBody = document.getElementById("analysis-body");
  newBody.style.fontSize = "24px";
  newBody.style.margin = "15vw";
  newBody.innerText = cleanThread;
  const metrics = `
  Letters: ${letterCount}
  Words: ${wordCount}
  Sentences: ${sentenceCount}
  CLI: ${cli.toFixed(3)}
  `;
  let results = document.createElement("section");
  results.style.marginBottom = "6rem";
  results.id = "analysis-results";
  results.innerText = metrics;
  const analysis = {
    source: window.location.href,
    letters: letterCount,
    words: wordCount,
    sentences: sentenceCount,
    cli: cli
  };
  chrome.storage.sync.set({ analysis }).then(() =>
    chrome.storage.sync.get("settings", ({ settings }) => {
      newBody.prepend(results);
      newBody.style.backgroundColor = settings.bgColor;
      newBody.style.color = settings.textColor;
      const returnBtn = document.createElement("button");
      returnBtn.textContent = "RETURN";
      returnBtn.addEventListener("click", (e) => window.location.reload());
      newBody.prepend(returnBtn);
    })
  );
}
