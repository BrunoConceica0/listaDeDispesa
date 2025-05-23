function checkboxItem(checkbox, newItem) {
  checkbox.addEventListener("change", () => {
    checkbox.checked
      ? newItem.classList.add("completed")
      : newItem.classList.remove("completed");
  });
}
export default checkboxItem;
