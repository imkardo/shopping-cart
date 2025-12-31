const cartBtn = document.querySelector(".cart-btn");
const cartModal = document.querySelector(".cart-center");
const backDrop = document.querySelector(".backdrop");
const closeModal = document.querySelector(".cart-item-confirm");

cartBtn.addEventListener("click", showModalFunction);
backDrop.addEventListener("click", closeModalFunction);
closeModal.addEventListener("click", closeModalFunction);

function showModalFunction() {
  cartModal.classList.remove("hidden");
}
function closeModalFunction() {
  cartModal.classList.add("hidden");
}
