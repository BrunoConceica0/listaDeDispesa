const listEmpty = document.querySelector(".list-empty");
function isLsitEmpty(listItem) {
  const listBox = listItem.querySelectorAll("div");
  console.log(listBox);

  if (listBox.length === 0) {
    listEmpty.style.display = "block";
  } else {
    listEmpty.style.display = "none";
  }
  return listBox;
}
export default isLsitEmpty;
