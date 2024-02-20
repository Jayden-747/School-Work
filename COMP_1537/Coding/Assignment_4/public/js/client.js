async function listChange() {
  // Fetch the content of the HTML file containing the new list
  const response = await fetch("/app/html/newlist.html");
  const data = await response.text();

  // Get the original list elemetn
  const originalList = document.getElementById("placeholder");

  originalList.innerHTML = data;
}

console.log(listChange());

console.log("client.js loaded.");
