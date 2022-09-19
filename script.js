const Increment = () => {
  let target = Number(document.getElementById("number").innerHTML);
  document.getElementById("number").innerHTML = target + 1;
};
const Decrement = () => {
  let target = Number(document.getElementById("number").innerHTML);
  document.getElementById("number").innerHTML = target - 1;
};
const Neutral = () => {
  document.getElementById("number").innerHTML = 0;
};
