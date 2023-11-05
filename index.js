const GlobalContainer = document.querySelector(".Global");
const GreetingContainer = document.querySelector(".Greeting");

const SubmitBtn = document.getElementById("subBtn");
const RatinBtn = document.getElementById("rating");

SubmitBtn.addEventListener("click", () => {
  GreetingContainer.classList.remove("Hidden");
  GlobalContainer.style.display = "none";
});
RatinBtn.addEventListener("click", () => {
  GreetingContainer.classList.add("Hidden");
  GlobalContainer.style.display = "block";
});
