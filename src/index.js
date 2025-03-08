function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "4t3b0c0493f4f5e63b225526afa19e0o";
  let context =
    "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem. Break every line with a <br/>. Make sure to follow the user instructions. Do not include a title in the poem. Sign the poem with `SheCodes AI` inside a <strong> element and appear in its own line.";
  let prompt = `User instructions: Generate a French poem about ${instructionsInput.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">⏳Generating a French poem about ${instructionsInput.value}</div>`;

  console.log("Generating poem");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
