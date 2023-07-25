document.addEventListener("DOMContentLoaded", () => {
  const discountBtn = document.querySelector('.discount-button');
  const discountInput = document.getElementById('discountInput');
  const successMessage = document.getElementById('successMessage');

  function removeDiscountCode() {

    if (discountInput && successMessage) {
      discountInput.value = '';
      successMessage.style.display = 'none';
    }
  
  }

  if (discountBtn) {
    discountBtn.addEventListener("click", removeDiscountCode);
  }

});
