function coverToToString() {
  const input = document.getElementById("my-input");
  const result = document.getElementById("my-result");

  var inputArray = input.value.split("\n");

  var inputArray2 = [];
  inputArray.forEach((item) => {
    if (item.trim() != "") {
      inputArray2.push(item.trim());
    }
  });

  var inputArray3 = [];
  inputArray2.forEach((item) => {
    let endIndex = item.indexOf("{") - 1;
    inputArray3.push(item.substring(0, endIndex));
  });
  var inputArray4 = [];
  inputArray3.forEach((item) => {
    let startIndex = item.lastIndexOf(" ");
    inputArray4.push(item.substring(startIndex));
  });

  var inputFinal = inputArray4;
  result.innerHTML = 'public override string? ToString()\n{\nreturn $"';
  for (let i = 0; i < inputFinal.length; i++) {
    if (inputFinal[i].length != 0) {
      if (i != 0) {
        result.innerHTML += ", ";
      }
      result.innerHTML += inputFinal[i].trim() + ": {" + inputFinal[i].trim() + "}";
    }
  }
  result.innerHTML += '";\n}';
}
