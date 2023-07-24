//modal

document.addEventListener("DOMContentLoaded", () => {
    const orderModal = document.getElementById("orderModal");
    const cleaningModal = document.getElementById("cleaningModal");
    const expandCleaningDetails = document.getElementById("getCleaningDetails");
    const expandFoodDetails = document.getElementById("getFoodDetails");
    const closeOrderBtn = document.getElementById("closeOrderBtn");
    const closeCleaningBtn = document.getElementById("closeCleaningBtn");
  
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