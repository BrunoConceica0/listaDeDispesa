import checkEmpty from "./checkEmptyList.js";

function removeItem(listProduct, listItem) {
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn");
  removeBtn.innerHTML = "Remover";

  removeBtn.addEventListener("click", () => {
    listItem.removeChild(listProduct);
    checkEmpty(listItem);
  });
  listProduct.appendChild(removeBtn);
}
export default removeItem;
