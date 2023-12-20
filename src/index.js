function displayStory(response) {
  new Typewriter("#story", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

function generateStory(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "01cf80e9bcbto43d240bebba2f83d942";
  let context =
    "You are a well renowned author who has written many prize winning short stories. Writing short stories is your passion. You mission is to generate a short story, that is always happy or hopeful and is no more than 10 lines. Always add a title inside a <strong> element. Seperate title and the first line of the story with a <br />. ";
  let prompt = `User instructions: Generate a short story about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let storyElement = document.querySelector("#story");
  storyElement.classList.remove("hidden");
  storyElement.innerHTML = `⏳ Generating a story about ${instructionsInput.value}`;

  axios.get(apiURL).then(displayStory);
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
