document.addEventListener("DOMContentLoaded", () => {
  const discountBtn = document.querySelector('.discount-button');

  function removeDiscountCode() {
    const discountInput = document.getElementById('discountInput');
    const successMessage = document.getElementById('successMessage');

    discountInput.value = '';

    successMessage.style.display = 'none';
  }

  discountBtn.addEventListener("click", removeDiscountCode);

});
