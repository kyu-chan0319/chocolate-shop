function openModal(imageSrc, title, description) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = /*html*/ `
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <div class="modal-detail">
        <div class="modal-img">
          <img src="${imageSrc}" alt="Modal Image">
        </div>
        <div class="modal-text">
        <h3 class="modal-h3">${title}</h3>
        <p class="modal-description">${description}</p>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function closeModal() {
  const modal = document.querySelector(".modal");
  if (modal) {
    modal.remove();
  }
}
