// getElementById()
const element = document.getElementById("header");
element.style.color = "orange";

let paragraph = document.getElementById("paragraph");
paragraph.innerHTML = "Teks paragraf sudah berhasil diubah!";

let myButton = document.getElementById("button");
myButton.addEventListener("click", function () {
  alert("Tombol sudah berhasil diklik!");
});

// ===================================================================================

//getElementsByClassName()
var tombol = document.getElementsByClassName("tombol")[0];

tombol.addEventListener("click", function () {
  var mhs = document.getElementsByClassName("mhs");
  for (var i = 0; i < mhs.length; i++) {
    alert(mhs[i].innerText);
  }
});

// ===================================================================================

//querySelector()
var tombol = document.querySelector("#tombol1");

tombol.addEventListener("click", function () {
  var h1 = document.querySelector("#h1-awal");
  h1.classList.add("teks-orange");
  var p = document.querySelector("#p-awal;");
  p.style.fontSize = "20px";
});
