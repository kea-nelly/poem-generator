function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "La tombe dit ā la rose",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
