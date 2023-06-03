const array = [
  {
    name: "Sư Huynh Của Ta Quá Mạnh",
    link: "https://metruyencv.com/truyen/su-huynh-cua-ta-qua-manh",
    mark: "7",
  },
  {
    name: "Ta Thật Không Yếu A",
    link: "https://metruyencv.com/truyen/ta-that-khong-yeu-a",
    mark: "7",
  },
  {
    name: "Quỷ Đạo Chi Chủ",
    link: "https://metruyencv.com/truyen/quy-dao-chi-chu",
    mark: "1",
  },
  {
    name: "Quang Âm Chi Ngoại",
    link: "https://metruyencv.com/truyen/quang-am-chi-ngoai",
    mark: "0",
  },
  {
    name: "Ngươi Thậm Chí Ngay Cả Đánh Dấu Cũng Không Có Sao?",
    link: "https://sangtacviet.pro/truyen/ciweimao/1/100318853/",
    mark: "1",
  },{
    name: "SƯ SĨ TRUYỀN THUYẾT",
    link: "https://truyenfull.vn/su-si-truyen-thuyet/",
    mark: "0",
  },
];

array.sort(compare);
for (i = 0; i < array.length; i++) {
  //create name
  var atag = document.createElement("a");
  atag.textContent = array[i].name;
  //create link
  var linkto = document.createElement("a");
  linkto.href = array[i].link;
  linkto.textContent = "Link";
  linkto.classList.add("link-to");

  var li = document.createElement("li");
  li.appendChild(atag);
  li.appendChild(linkto);

  if (array[i].mark != null && array[i].mark != "0") {
    li.classList.add("readed");
  }
  document.getElementById("myList").appendChild(li);
}
function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
