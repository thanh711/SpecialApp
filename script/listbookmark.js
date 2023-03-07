const array = [
  {
    name: "Quang Âm Chi Ngoại",
    link: "https://metruyencv.com/truyen/quang-am-chi-ngoai",
    mark: "0",
  },
];
array.push({
  name: "Ngươi Thậm Chí Ngay Cả Đánh Dấu Cũng Không Có Sao?",
  link: "https://sangtacviet.pro/truyen/ciweimao/1/100318853/",
});
array.push({ name: "kiwwi", link: "ok" });
array.push({ name: "kiwwi", link: "ok" });

for (i = 0; i < array.length; i++) {
  var atag = document.createElement("a");
  atag.href = array[i].link;
  atag.textContent = array[i].name;
  var li = document.createElement("li");
  li.appendChild(atag);
  if (array[i].mark != null) {
    li.classList.add("checked");
  }
  document.getElementById("myUL").appendChild(li);
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
