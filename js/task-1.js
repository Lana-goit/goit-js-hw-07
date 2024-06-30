const menuListItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${menuListItems.length}`);
menuListItems.forEach((category) => {
  const mainItem = category.querySelector("h2");
  console.log(`Category: ${mainItem.textContent}`);
  const categoryItem = category.querySelector("ul");
  console.log(`Elements: ${categoryItem.children.length}`);
});
