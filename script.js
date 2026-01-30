const textBox = document.querySelector("#user-input");
const outputBox = document.querySelector("#quiz-outputs");
const statusBox = document.querySelector("#status");

let score = 0;
let jersey = false;
const found = new Set();

const checkAnswer = () => {
  const currentAnswer = textBox.value.trim().toLowerCase();
  if (!currentAnswer) return;

  if (found.has(currentAnswer)) {
    statusBox.innerHTML = "You already found that one!";
    textBox.value = "";
    return;
  }

  switch (currentAnswer) {
    case "manhattan":
      outputBox.innerHTML += `<h3>Manhattan</h3><p>Commuter Central! Only 22% of its residents own a car!</p>`;
      score++;
      break;

    case "brooklyn":
      outputBox.innerHTML += `<h3>Brooklyn</h3><p>The most populous borough, with nearly 3 million residents!</p>`;
      score++;
      break;

    case "bronx":
    case "the bronx":
      outputBox.innerHTML += `<h3>The Bronx</h3><p>Home of the Yankees and the birthplace of salsa dancing.</p>`;
      score++;
      break;

    case "queens":
      outputBox.innerHTML += `<h3>Queens</h3><p>The largest borough, at 109 square miles.</p>`;
      score++;
      break;

    case "staten island":
      outputBox.innerHTML += `<h3>Staten Island</h3><p>The roomiest borough, with the fewest people per square mile.</p>`;
      score++;
      break;

    case "jersey city":
      outputBox.innerHTML += `<h3>Jersey City</h3><p>You found the sixth borough!</p>`;
      jersey = true;
      break;

    default:
      statusBox.innerHTML = `Sorry, "${textBox.value}" is not a NYC borough.`;
      textBox.value = "";
      return;
  }

  found.add(currentAnswer);
  checkScore();
  textBox.value = "";
};

const checkScore = () => {
  if (score === 5 && jersey) {
    statusBox.innerHTML =
      "A true New Yorker! All five boroughs and our neighbors in Jersey City.";
    textBox.disabled = true;
  } else if (score === 5) {
    statusBox.innerHTML = "Congratulations, you found all five boroughs!";
  }
};

// Press Enter to submit
textBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkAnswer();
});
