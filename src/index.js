function generateStory(event) {
  event.preventDefault();

  new Typewriter("#story", {
    strings: "Contents will go here",
    autoStart: true,
    cursor: "",
  });
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
