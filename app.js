const buttonElement = document.getElementById("btn");
const jokeElement = document.getElementById("joke");
const apiKey = "9oEHD40qVrOhimihTI3v+A==vrcSwApmJvrF0pVm";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeElement.textContent = "Updating....";
    buttonElement.disabled = true;
    buttonElement.textContent = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    buttonElement.disabled = false;
    buttonElement.textContent = "Tell me a joke";

    jokeElement.textContent = data[0].joke;
  } catch (error) {
    jokeElement.textContent = "An error happened, try again later";
    buttonElement.disabled = false;
    buttonElement.textContent = "Tell me a joke";
  }
}

buttonElement.addEventListener("click", getJoke);
