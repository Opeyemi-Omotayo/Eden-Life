document.addEventListener("DOMContentLoaded", () => {
  const confettiContainer = document.querySelector(".confetti-container");
  const orderModal = document.getElementById("orderModal");
  const cleaningModal = document.getElementById("cleaningModal");
  const expandCleaningDetails = document.getElementById("getCleaningDetails");
  const expandFoodDetails = document.getElementById("getFoodDetails");
  const closeOrderBtn = document.getElementById("closeOrderBtn");
  const closeCleaningBtn = document.getElementById("closeCleaningBtn");

  /// confetti
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

  ///modal
  function openModal(modal) {
    modal.style.display = "flex";
  }

  function closeModal(modal) {
    modal.style.display = "none";
  }

  expandFoodDetails.addEventListener("click", () => openModal(orderModal));
  expandCleaningDetails.addEventListener("click", () =>
    openModal(cleaningModal)
  );
  closeOrderBtn.addEventListener("click", () => closeModal(orderModal));
  closeCleaningBtn.addEventListener("click", () => closeModal(cleaningModal));

  orderModal.addEventListener("click", (event) => {
    if (event.target === orderModal) {
      orderModal.style.display = "none";
    }
  });

  cleaningModal.addEventListener("click", (event) => {
    if (event.target === cleaningModal) {
      cleaningModal.style.display = "none";
    }
  });
});
