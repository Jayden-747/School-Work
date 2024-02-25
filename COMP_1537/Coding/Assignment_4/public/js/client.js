console.log("client.js loaded.");

document.addEventListener("DOMContentLoaded", function () {
  function listLoad() {
    // Grab the page elements
    const div = document.getElementById("gow-placeholder");
    const list = document.getElementById("gow-list");

    console.log("list", list);

    // Append the cloned list to the placeholder div
    div.appendChild(clonedList);
  }
  listLoad();
});
