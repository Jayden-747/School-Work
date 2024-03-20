console.log("client.js loaded.");

function ajaxGET(url, callback) {
  const xhr = new XMLHttpRequest();
  parser = new DOMParser();

  //console.log("xhr", xhr);
  xhr.onload = function () {
    value = this.responseText;
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      //console.log('responseText:' + xhr.responseText);

      // callback function
      value = this.responseText;
      callback(this.responseText);
    } else {
      console.log(this.status);
    }
  };
  xhr.open("GET", url); // localhost:8000/weekdays?format=html
  xhr.send();
}

function loadGodOfWar() {
  ajaxGET("article-lists", function (data) {
    data = parser
      .parseFromString(data, "text/html")
      .querySelector("div#god-of-war").innerHTML;
    document.getElementById("gow-placeholder").innerHTML = data;
    console.log(data);
  });
}

function loadTheLastOfUs() {
  ajaxGET("article-lists", function (data) {
    data = parser
      .parseFromString(data, "text/html")
      .querySelector("div#the-last-of-us").innerHTML;
    document.getElementById("tlou-placeholder").innerHTML = data;
    console.log(data);
  });
}

function loadHades() {
  ajaxGET("article-lists", function (data) {
    data = parser
      .parseFromString(data, "text/html")
      .querySelector("div#hades").innerHTML;
    document.getElementById("hades-placeholder").innerHTML = data;
    console.log(data);
  });
}

function loadDeathStranding() {
  ajaxGET("article-lists", function (data) {
    data = parser
      .parseFromString(data, "text/html")
      .querySelector("div#death-stranding").innerHTML;
    document.getElementById("ds-placeholder").innerHTML = data;
    console.log(data);
  });
}

function loadLiesOfP() {
  ajaxGET("article-lists", function (data) {
    data = parser
      .parseFromString(data, "text/html")
      .querySelector("div#lies-of-p").innerHTML;
    document.getElementById("lop-placeholder").innerHTML = data;
    console.log(data);
  });
}

function loadUncharted3() {
  ajaxGET("article-lists", function (data) {
    data = parser
      .parseFromString(data, "text/html")
      .querySelector("div#uncharted-3").innerHTML;
    document.getElementById("uc3-placeholder").innerHTML = data;
    console.log(data);
  });
}

function loadRedDeadRedemptionII() {
  ajaxGET("article-lists", function (data) {
    data = parser
      .parseFromString(data, "text/html")
      .querySelector("div#red-dead-redemption-II").innerHTML;
    document.getElementById("rdr2-placeholder").innerHTML = data;
    console.log(data);
  });
}

function loadResidentEvil() {
  ajaxGET("article-lists", function (data) {
    data = parser
      .parseFromString(data, "text/html")
      .querySelector("div#resident-evil").innerHTML;
    document.getElementById("re4-placeholder").innerHTML = data;
    console.log(data);
  });
}

function loadBlackOps3() {
  ajaxGET("article-lists", function (data) {
    data = parser
      .parseFromString(data, "text/html")
      .querySelector("div#black-ops-III").innerHTML;
    document.getElementById("blops3-placeholder").innerHTML = data;
    console.log(data);
  });
}

function loadKingdomHeartsII() {
  ajaxGET("article-lists", function (data) {
    data = parser
      .parseFromString(data, "text/html")
      .querySelector("div#kingdom-hearts-II").innerHTML;
    document.getElementById("kh2-placeholder").innerHTML = data;
    console.log(data);
  });
}

document.getElementById("loadHTML").addEventListener("click", function () {
  loadGodOfWar();
  loadTheLastOfUs();
  loadHades();
  loadDeathStranding();
  loadLiesOfP();
  loadUncharted3();
  loadRedDeadRedemptionII();
  loadResidentEvil();
  loadBlackOps3();
  loadKingdomHeartsII();
});

document.getElementById("loadJSON").addEventListener("click", function () {
  ajaxGET("/article-lists2", function (data) {
    let parsedData = JSON.parse(data);
    let gow = parsedData[0];
    console.log(gow);

    // GOD OF WAR
    document.getElementById("gow-placeholder").innerHTML =
      "<ul>" +
      "<li>" +
      "<h3 class='article-title'>" +
      gow["title"] +
      "</h3>" +
      "</li>" +
      " <li class='article-text'>" +
      "<b class='text-tag'>Genre: </b>" +
      gow["genre"] +
      "</li>" +
      " <li class='article-text'>" +
      "<b class='text-tag'>Developer: </b>" +
      gow["developer"] +
      "</li>" +
      "<li class='article-text'>" +
      " <b class='text-tag'>Publisher: </b>" +
      gow["publisher"] +
      "</li>" +
      "<li class='article-text'>" +
      "<b class='text-tag'>Creator: </b>" +
      gow["creator"] +
      "</li>" +
      " </ul>";

    // THE LAST OF US
    let tlou = parsedData[1];
    console.log(tlou);
    document.getElementById("tlou-placeholder").innerHTML =
      "<ul>" +
      "<li>" +
      "<h3 class='article-title'>" +
      tlou["title"] +
      "</h3>" +
      "</li>" +
      " <li class='article-text'>" +
      "<b class='text-tag'>Genre: </b>" +
      tlou["genre"] +
      "</li>" +
      " <li class='article-text'>" +
      "<b class='text-tag'>Developer: </b>" +
      tlou["developer"] +
      "</li>" +
      "<li class='article-text'>" +
      " <b class='text-tag'>Publisher: </b>" +
      tlou["publisher"] +
      "</li>" +
      "<li class='article-text'>" +
      "<b class='text-tag'>Creator: </b>" +
      tlou["creator"] +
      "</li>" +
      " </ul>";

    // HADES
    let hades = parsedData[2];
    console.log(hades);
    document.getElementById("hades-placeholder").innerHTML =
      "<ul>" +
      "<li>" +
      "<h3 class='article-title'>" +
      hades["title"] +
      "</h3>" +
      "</li>" +
      " <li class='article-text'>" +
      "<b class='text-tag'>Genre: </b>" +
      hades["genre"] +
      "</li>" +
      " <li class='article-text'>" +
      "<b class='text-tag'>Developer: </b>" +
      hades["developer"] +
      "</li>" +
      "<li class='article-text'>" +
      " <b class='text-tag'>Publisher: </b>" +
      hades["publisher"] +
      "</li>" +
      "<li class='article-text'>" +
      "<b class='text-tag'>Creator: </b>" +
      hades["creator"] +
      "</li>" +
      " </ul>";

    // DEATH STRANDING
    let ds = parsedData[3];
    console.log(ds);
    document.getElementById("ds-placeholder").innerHTML =
      "<ul>" +
      "<li>" +
      "<h3 class='article-title'>" +
      ds["title"] +
      "</h3>" +
      "</li>" +
      " <li class='article-text'>" +
      "<b class='text-tag'>Genre: </b>" +
      ds["genre"] +
      "</li>" +
      " <li class='article-text'>" +
      "<b class='text-tag'>Developer: </b>" +
      ds["developer"] +
      "</li>" +
      "<li class='article-text'>" +
      " <b class='text-tag'>Publisher: </b>" +
      ds["publisher"] +
      "</li>" +
      "<li class='article-text'>" +
      "<b class='text-tag'>Creator: </b>" +
      ds["creator"] +
      "</li>" +
      " </ul>";

    // LIES OF P
    let lop = parsedData[4];
    console.log(lop);
    document.getElementById("lop-placeholder").innerHTML =
      "<ul>" +
      "<li>" +
      "<h3 class='article-title'>" +
      lop["title"] +
      "</h3>" +
      "</li>" +
      " <li class='article-text'>" +
      "<b class='text-tag'>Genre: </b>" +
      lop["genre"] +
      "</li>" +
      " <li class='article-text'>" +
      "<b class='text-tag'>Developer: </b>" +
      lop["developer"] +
      "</li>" +
      "<li class='article-text'>" +
      " <b class='text-tag'>Publisher: </b>" +
      lop["publisher"] +
      "</li>" +
      "<li class='article-text'>" +
      "<b class='text-tag'>Creator: </b>" +
      lop["creator"] +
      "</li>" +
      " </ul>";

    // UNCHARTED 3
    let uc3 = parsedData[5];
    console.log(uc3);
    document.getElementById("uc3-placeholder").innerHTML =
      "<ul>" +
      "<li>" +
      "<h3 class='article-title'>" +
      uc3["title"] +
      "</h3>" +
      "</li>" +
      " <li class='article-text'>" +
      "<b class='text-tag'>Genre: </b>" +
      uc3["genre"] +
      "</li>" +
      " <li class='article-text'>" +
      "<b class='text-tag'>Developer: </b>" +
      uc3["developer"] +
      "</li>" +
      "<li class='article-text'>" +
      " <b class='text-tag'>Publisher: </b>" +
      uc3["publisher"] +
      "</li>" +
      "<li class='article-text'>" +
      "<b class='text-tag'>Creator: </b>" +
      uc3["creator"] +
      "</li>" +
      " </ul>";

    // RED DEAD REDEMPTION II
    let rdr2 = parsedData[6];
    console.log(rdr2);
    document.getElementById("rdr2-placeholder").innerHTML =
      "<ul>" +
      "<li>" +
      "<h3 class='article-title'>" +
      rdr2["title"] +
      "</h3>" +
      "</li>" +
      " <li class='article-text'>" +
      "<b class='text-tag'>Genre: </b>" +
      rdr2["genre"] +
      "</li>" +
      " <li class='article-text'>" +
      "<b class='text-tag'>Developer: </b>" +
      rdr2["developer"] +
      "</li>" +
      "<li class='article-text'>" +
      " <b class='text-tag'>Publisher: </b>" +
      rdr2["publisher"] +
      "</li>" +
      "<li class='article-text'>" +
      "<b class='text-tag'>Creator: </b>" +
      rdr2["creator"] +
      "</li>" +
      " </ul>";

    // RESIDENT EVIL 4
    let re4 = parsedData[7];
    console.log(re4);
    document.getElementById("re4-placeholder").innerHTML =
      "<ul>" +
      "<li>" +
      "<h3 class='article-title'>" +
      re4["title"] +
      "</h3>" +
      "</li>" +
      " <li class='article-text'>" +
      "<b class='text-tag'>Genre: </b>" +
      re4["genre"] +
      "</li>" +
      " <li class='article-text'>" +
      "<b class='text-tag'>Developer: </b>" +
      re4["developer"] +
      "</li>" +
      "<li class='article-text'>" +
      " <b class='text-tag'>Publisher: </b>" +
      re4["publisher"] +
      "</li>" +
      "<li class='article-text'>" +
      "<b class='text-tag'>Creator: </b>" +
      re4["creator"] +
      "</li>" +
      " </ul>";

    // BLACK OPS III
    let blops3 = parsedData[8];
    console.log(blops3);
    document.getElementById("blops3-placeholder").innerHTML =
      "<ul>" +
      "<li>" +
      "<h3 class='article-title'>" +
      blops3["title"] +
      "</h3>" +
      "</li>" +
      " <li class='article-text'>" +
      "<b class='text-tag'>Genre: </b>" +
      blops3["genre"] +
      "</li>" +
      " <li class='article-text'>" +
      "<b class='text-tag'>Developer: </b>" +
      blops3["developer"] +
      "</li>" +
      "<li class='article-text'>" +
      " <b class='text-tag'>Publisher: </b>" +
      blops3["publisher"] +
      "</li>" +
      "<li class='article-text'>" +
      "<b class='text-tag'>Creator: </b>" +
      blops3["creator"] +
      "</li>" +
      " </ul>";

    // KINGDOM HEARTS II
    let kh2 = parsedData[9];
    console.log(kh2);
    document.getElementById("kh2-placeholder").innerHTML =
      "<ul>" +
      "<li>" +
      "<h3 class='article-title'>" +
      kh2["title"] +
      "</h3>" +
      "</li>" +
      " <li class='article-text'>" +
      "<b class='text-tag'>Genre: </b>" +
      kh2["genre"] +
      "</li>" +
      " <li class='article-text'>" +
      "<b class='text-tag'>Developer: </b>" +
      kh2["developer"] +
      "</li>" +
      "<li class='article-text'>" +
      " <b class='text-tag'>Publisher: </b>" +
      kh2["publisher"] +
      "</li>" +
      "<li class='article-text'>" +
      "<b class='text-tag'>Creator: </b>" +
      kh2["creator"] +
      "</li>" +
      " </ul>";
  });
});

document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("gow-placeholder").innerHTML = "";
  document.getElementById("tlou-placeholder").innerHTML = "";
  document.getElementById("hades-placeholder").innerHTML = "";
  document.getElementById("ds-placeholder").innerHTML = "";
  document.getElementById("lop-placeholder").innerHTML = "";
  document.getElementById("uc3-placeholder").innerHTML = "";
  document.getElementById("rdr2-placeholder").innerHTML = "";
  document.getElementById("re4-placeholder").innerHTML = "";
  document.getElementById("blops3-placeholder").innerHTML = "";
  document.getElementById("kh2-placeholder").innerHTML = "";
});
