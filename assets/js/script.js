const btnGenerator = document.querySelector(".advice-generator");
const adviceId = document.querySelector(".number-advice");
const adviceText = document.querySelector(".advice");

async function getAdvice() {
  try {
    const response = await fetch(
      `https://api.adviceslip.com/advice?t=${new Date().getTime()}`,
    );
    const data = await response.json();
    adviceId.textContent = `ADVICE #${data.slip.id}`;
    adviceText.textContent = `“${data.slip.advice}”`;
    console.log(data.slip.id);
  } catch (error) {
    console.error("Erreur lors de l'appel API :", error);
    adviceId.textContent = "Désoler"
    adviceText.textContent = "Impossible de charger un conseil.";
  }
}
getAdvice();
btnGenerator.addEventListener("click", getAdvice);
