const array = [
  {
    name: "Quang Âm Chi Ngoại",
    link: "https://metruyencv.com/truyen/quang-am-chi-ngoai",
    mark: "0",
  },
  {
    name: "Quang Âm Chi Ngoại1",
    link: "https://metruyencv.com/truyen/quang-am-chi-ngoai",
    mark: "1",
  },
  {
    name: "Quang Âm Chi Ngoại3",
    link: "https://metruyencv.com/truyen/quang-am-chi-ngoai",
    mark: "1",
  },
  {
    name: "Quang Âm Chi Ngoại2",
    link: "https://metruyencv.com/truyen/quang-am-chi-ngoai",
    mark: "1",
  },
];
array.push({
  name: "Ngươi Thậm Chí Ngay Cả Đánh Dấu Cũng Không Có Sao?",
  link: "https://sangtacviet.pro/truyen/ciweimao/1/100318853/",
});
array.sort( compare );
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

  if (array[i].mark != null) {
    li.classList.add("readed");
  }
  document.getElementById("myList").appendChild(li);
}
function compare( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }
  