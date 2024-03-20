console.log("Script Loaded.");

const userName = document.getElementById("userName");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const ID = document.getElementById("ID");
const text = document.getElementById("post");
const date = document.getElementById("date");
const views = document.getElementById("views");
const table = document.getElementById("table");
const clear = document.getElementById("clear");

// Button "On Click" Functions
document.querySelector(".button1").addEventListener("click", function () {
  console.log("Button 1 Clicked");
  table.style.display = "block";
  ajaxGET("/user", function (data) {
    let parsedData = JSON.parse(data);
    userName.innerHTML = parsedData[0].user_name;
    firstName.innerHTML = parsedData[0].first_name;
    lastName.innerHTML = parsedData[0].last_name;
    email.innerHTML = parsedData[0].email_address;
    console.log(parsedData);
    ID.innerHTML = parsedData[0].StudentID;
  });
  ajaxGET("/user-timeline", function (data) {
    let parsedData = JSON.parse(data);
    text.innerHTML = parsedData[0].post_text;
    views.innerHTML = parsedData[0].post_views;
    date.innerHTML = parsedData[0].post_date + " " + parsedData[0].post_time;
    console.log(parsedData);
  });
});
document.querySelector(".button2").addEventListener("click", function () {
  console.log("Button 2 Clicked");
  table.style.display = "block";
  ajaxGET("/user", function (data) {
    let parsedData = JSON.parse(data);
    userName.innerHTML = parsedData[0].user_name;
    firstName.innerHTML = parsedData[0].first_name;
    lastName.innerHTML = parsedData[0].last_name;
    email.innerHTML = parsedData[0].email_address;
    console.log(parsedData);
    ID.innerHTML = parsedData[0].StudentID;
  });
  ajaxGET("/user-timeline", function (data) {
    let parsedData = JSON.parse(data);
    text.innerHTML = parsedData[1].post_text;
    views.innerHTML = parsedData[1].post_views;
    date.innerHTML = parsedData[1].post_date + " " + parsedData[1].post_time;
    console.log(parsedData);
  });
});
document.querySelector(".button3").addEventListener("click", function () {
  console.log("Button 3 Clicked");
  table.style.display = "block";
  ajaxGET("/user", function (data) {
    let parsedData = JSON.parse(data);
    userName.innerHTML = parsedData[0].user_name;
    firstName.innerHTML = parsedData[0].first_name;
    lastName.innerHTML = parsedData[0].last_name;
    email.innerHTML = parsedData[0].email_address;
    console.log(parsedData);
    ID.innerHTML = parsedData[0].StudentID;
  });
  ajaxGET("/user-timeline", function (data) {
    let parsedData = JSON.parse(data);
    text.innerHTML = parsedData[2].post_text;
    views.innerHTML = parsedData[2].post_views;
    date.innerHTML = parsedData[2].post_date + " " + parsedData[2].post_time;
    console.log(parsedData);
  });
});
document.querySelector(".button4").addEventListener("click", function () {
  console.log("Button 4 Clicked");
  table.style.display = "block";
  ajaxGET("/user", function (data) {
    let parsedData = JSON.parse(data);
    userName.innerHTML = parsedData[0].user_name;
    firstName.innerHTML = parsedData[0].first_name;
    lastName.innerHTML = parsedData[0].last_name;
    email.innerHTML = parsedData[0].email_address;
    console.log(parsedData);
    ID.innerHTML = parsedData[0].StudentID;
  });
  ajaxGET("/user-timeline", function (data) {
    let parsedData = JSON.parse(data);
    text.innerHTML = parsedData[3].post_text;
    views.innerHTML = parsedData[3].post_views;
    date.innerHTML = parsedData[3].post_date + " " + parsedData[3].post_time;
    console.log(parsedData);
  });
});
document.querySelector(".button5").addEventListener("click", function () {
  console.log("Button 5 Clicked");
  table.style.display = "block";
  ajaxGET("/user", function (data) {
    let parsedData = JSON.parse(data);
    userName.innerHTML = parsedData[0].user_name;
    firstName.innerHTML = parsedData[0].first_name;
    lastName.innerHTML = parsedData[0].last_name;
    email.innerHTML = parsedData[0].email_address;
    console.log(parsedData);
    ID.innerHTML = parsedData[0].StudentID;
  });
  ajaxGET("/user-timeline", function (data) {
    let parsedData = JSON.parse(data);
    text.innerHTML = parsedData[4].post_text;
    views.innerHTML = parsedData[4].post_views;
    date.innerHTML = parsedData[4].post_date + " " + parsedData[4].post_time;
    console.log(parsedData);
  });
});

document.querySelector(".clear").addEventListener("click", function () {
  table.style.display = "none";
});

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
