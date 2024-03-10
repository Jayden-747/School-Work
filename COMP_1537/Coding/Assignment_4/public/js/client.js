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
