const meatFood = ["gà rang ", "sườn chua ngọt", "lợn luộc"];
const vegetableFood = ["canh rau cải", "xúp lơ xào"];
const mixFood = ["bún đậu", "bún cuốn"];

const meatFoodLength = meatFood.length;
const vegetableFoodLength = vegetableFood.length;
const mixFoodLength = mixFood.length;

function changefood() {
  var resultmeat = document.getElementById("result-meat");
  var resultvegetable = document.getElementById("result-vegetable");
  var resultmix = document.getElementById("result-mix");

  const index1 = Math.floor(Math.random() * meatFoodLength);
  const index2 = Math.floor(Math.random() * vegetableFoodLength);
  const index3 = Math.floor(Math.random() * mixFoodLength);

  resultmeat.textContent = meatFood[index1];
  resultvegetable.textContent = vegetableFood[index2];
  resultmix.textContent = mixFood[index3];
}
