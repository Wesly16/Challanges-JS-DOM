document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    alert("Anda telah menekan tombol spasi pada keyboard!");
  }
});

document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowRight") {
    document.getElementById("klikkanan").style.backgroundColor = "yellow";
  }
});

document.getElementById("klikDisini").addEventListener("click", function () {
  this.style.backgroundColor = "tomato";
});

document.getElementById("div").addEventListener("mouseover", function () {
  alert("Anda mengarahkan cursor mouse pada bagian ini!");
});
