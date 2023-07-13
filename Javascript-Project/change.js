
let colors = ["red", "orange", "blue", "purple", "cyan"];
let shapes = ["square", "triangle", "circle"];
document.getElementById("change-color").addEventListener("click", function () {
  document.getElementById("area").style.backgroundColor =
    colors[Math.floor(Math.random() * 5)];
});
 document.getElementById("change-shape");
changeShape.addEventListener("click", function () {
  let shape = document.querySelectorAll(".shape");
  for (let i = 0; i < shape.length; i++) {
    shape[i].style.display = "None";
  }
  document.getElementById(shapes[Math.floor(Math.random() * 3)]).style.display =
    "block";
});
