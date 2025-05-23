import checkEmpty from "./checkEmptyList.js";
import removeItem from "./removeItem.js";
import checkboxItem from "./checkbox.js";
const btn = document.getElementById("addButton");
const listItem = document.querySelector("[data-list='itens']");

let checkboxId = 1;
btn.addEventListener("click", (event) => {
  event.preventDefault();
  const listProduct = document.createElement("div");
  const product = document.createElement("div");

  const itemInput = document.getElementById("itemInput");
  const checkbox = document.createElement("input");
  const newItem = document.createElement("p");
  checkbox.classList.add("checkbox-item");
  checkbox.type = "checkbox";
  checkbox.id = `checkbox-${checkboxId++}`;

  //adicionando o item na lista

  if (itemInput.value === "") {
    alert("Digite um item");
  } else {
    newItem.innerHTML = itemInput.value;
    product.appendChild(checkbox);
    product.appendChild(newItem);
    newItem.classList.add("item_text");
    listProduct.appendChild(product);
    product.classList.add("product_item");
    listProduct.classList.add("list-item");
    listItem.appendChild(listProduct);
    checkEmpty(listItem);
  }
  //Vericar se o checkbox foi marcado
  checkboxItem(checkbox, newItem);
  removeItem(listProduct, listItem);

  itemInput.value = "";
});
