function savePreferences(key, value) {
  localStorage.setItem(key, value);
  console.log(`Saved: ${key} = ${value}`);
}

function getPreferences(key) {
  return localStorage.getItem(key);
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  const animatedElement = document.querySelector(".animate-me");

  button.addEventListener("click", () => {
    savePreferences("buttonClicked", "true");

    animatedElement.classList.add("animate");
    setTimeout(() => {
      animatedElement.classList.remove("animate");
    }, 1000); 
  });
});