import checkEmpty from "./checkEmptyList.js";

function removeItem(listProduto, listItem) {
  const removeBtn = document.createElement("buttom");
  removeBtn.classList.add("remove-btn");
  removeBtn.innerHTML = "x";

  removeBtn.addEventListener("click", () => {
    listItem.removeChild(listProduto);
    checkEmpty(listItem);
  });
  listProduto.appendChild(removeBtn);
}
export default removeItem;
