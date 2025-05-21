import checkEmpty from "./checkEmptyList.js";
import removeItem from "./removeItem.js";
const btn = document.getElementById("addButton");
const listItem = document.querySelector("[data-list='itens']");
console.log(listItem);
const containerItens = document.getElementById("container-list");

let checkboxId = 1;
btn.addEventListener("click", (event) => {
  event.preventDefault();
  const listProduto = document.createElement("div");
  const itemInput = document.getElementById("itemInput");
  const checkbox = document.createElement("input");
  const newItem = document.createElement("p");
  checkbox.classList.add("checkbox-item");
  checkbox.type = "checkbox";
  checkbox.id = `checkbox-${checkboxId++}`;

  checkEmpty(listItem);
  //adicionando o item na lista
  if (itemInput.value === "") {
    alert("Digite um item");
  } else {
    newItem.innerHTML = itemInput.value;
    listProduto.appendChild(checkbox);
    listProduto.appendChild(newItem);
    listItem.appendChild(listProduto);
    listProduto.classList.add("list-item");
    // containerItens.style.display = "block";
  }
  //Vericar se o checkbox foi marcado
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      newItem.classList.add("completed");
    } else {
      newItem.classList.remove("completed");
    }
  });
  itemInput.value = "";
  removeItem(listProduto, listItem);
});
