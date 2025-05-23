const listEmpty = document.querySelector(".list-empty");
function isLsitEmpty(listItem) {
  const listBox = listItem.querySelectorAll("div");

  listBox.length === 0
    ? (listEmpty.style.display = "block")
    : (listEmpty.style.display = "none");
  return listBox;
}
export default isLsitEmpty;
