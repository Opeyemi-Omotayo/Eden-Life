document.addEventListener("DOMContentLoaded", () => {
  const confettiContainer = document.querySelector(".confetti-container");
  const modal = document.getElementById("modal");
  const expandCleaningDetails = document.getElementById("getCleaningDetails");
  const expandFoodDetails = document.getElementById("getFoodDetails");
  const closeBtn = document.getElementById('closeBtn');


  let confettiTimeout;
  let isConfettiRunning = true;
  let confettiColors = [
    "red",
    "blueviolet",
    "green",
    "yellow",
    "blue",
    "orange",
    "wine",
    "purple",
  ];
  let confettiParticles = [];

  function createConfetti() {
    if (!isConfettiRunning) return;

    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor =
      confettiColors[Math.floor(Math.random() * confettiColors.length)];
    confettiContainer.appendChild(confetti);
    confettiParticles.push(confetti);

    setTimeout(() => {
      confettiParticles.shift();
      confetti.remove();
    }, 5000);
  }

  function stopConfetti() {
    isConfettiRunning = false;
    confettiParticles.forEach((confetti) => confetti.remove());
    confettiParticles = [];
  }

  confettiTimeout = setInterval(createConfetti, 100);

  setTimeout(() => {
    stopConfetti();
    clearTimeout(confettiTimeout);
  }, 5000);

  function openModal() {
    modal.style.display = "flex";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  closeBtn.addEventListener('click', closeModal);

  expandFoodDetails.addEventListener("click", openModal);

  expandCleaningDetails.addEventListener("click", openModal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
