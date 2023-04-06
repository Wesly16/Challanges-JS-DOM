1. Section 2

- Contoh 1, mengubah warna teks di header menjadi warna orange

---

const element = document.getElementById("header");
element.style.color = "orange";

---

- Contoh 2, mengubah teks paragraph dengan keterangan teks “Teks paragraf sudah berhasil diubah!”

---

let paragraph = document.getElementById("paragraph"); paragraph.innerHTML = "Teks paragraf sudah berhasil diubah!";

---

- Contoh 3, membuat tombol button jika di klik akan memunculkan pop up “Tombol sudah berhasil diklik!”

---

let myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
alert("Tombol sudah berhasil diklik!");
});

---

- Contoh 4, menampilkan nama yang sudah dibuat di dalam <li> dan akan menampilkan pop up nama mahasiswa yang sudah diinputkan

---

var tombol = document.getElementsByClassName("tombol")[0];

tombol.addEventListener("click", function() {
var mhs = document.getElementsByClassName("mhs");
for (var i = 0; i < mhs.length; i++) {
alert(mhs[i].innerText);
}
});

---

- Contoh 5, menambahkan tombol button yang berfungsi untuk mengubah warna teks

---

var tombol = document.querySelector("#tombol1");

tombol.addEventListener("click", function() {
var h1 = document.querySelector("#h1-awal");
h1.classList.add("teks-orange");
var p = document.querySelector("#p-awal;");
p.style.fontSize = "20px";
});

---

2. Section 3, code yang sudah dibuat ada 5 contoh

- contoh 1, mengubah text dengan code javascript:

---

var childElement = document.getElementsByTagName("p")[0];
var parentElement = childElement.parentNode;
parentElement.innerHTML = "Ini merupakan sebuah kalimat baru";

---

- contoh 2, mengubah kalimat dengan code javascript:

---

var listItems = document.getElementById("list").childNodes;
for(var i = 0; i < listItems.length; i++) {
if (listItems[i].nodeName == "LI") {
listItems[i].innerHTML = "Kata pada paragraf " + (i+1) + " sudah diubah!";
}
}

---

- contoh 3, mengubah text di childElements[i] dengan code javascript:

---

var selectedElement = document.getElementById("parent2");
var childElements = selectedElement.childNodes;
for(var i = 0; i < childElements.length; i++) {
if (childElements[i].nodeName == "P") {
childElements[i].innerHTML = "Ada penambahan pada kalimat " + (i+1);
}
}

---

- contoh 4, code javascript:

---

var targetElement = document.querySelector('.target');
var siblings = Array.from(targetElement.parentNode.childNodes)
.filter(node => node.nodeType === Node.ELEMENT_NODE && node !== targetElement);
console.log(siblings);

---

3. Section 4

- Contoh 1, menambah elemen baru dengan code javascript:

---

var newListItem = document.createElement("li");
var textNode = document.createTextNode("Kata - kata 4");
newListItem.appendChild(textNode);
document.getElementById("list").appendChild(newListItem);

---

- Contoh 2, menambah image baru

---

var newImage = document.createElement("img");
newImage.setAttribute("src", "https://tse4.mm.bing.net/th?id=OIP.BMDq38G7vr2bYc-yft241gHaD7&pid=Api&P=0");
document.getElementById("div").appendChild(newImage);

---

- Contoh 3, menambahkan tombol button

---

var newButton = document.createElement("button");
var textNode = document.createTextNode("Klik Disini");
newButton.appendChild(textNode);
document.body.appendChild(newButton);

---

4. Section 5

- Contoh 1, mengubah background color dengan warna red

---

## document.getElementById("div").setAttribute("style", "background-color: blue; color: white;");

- Contoh 2, mengubah text input

---

document.getElementById("button").setAttribute("value", "Hallo Semuanya");
function myfunction() {
document.getElementById("input").setAttribute("type", "button");
}

---

5. Section 6

- Contoh 1, mengubah warna teks menjadi warna ungu

---

## document.getElementById("hallo").style.color = "purple";

- Contoh 2, menambah border pada image

---

## document.getElementById("image").style.border = "5px solid black";

- Contoh 3, mengubah background color

---

var infoDiv = document.getElementById("info");
var styles = window.getComputedStyle(info);

console.log("Background color of div element: " + styles.backgroundColor);
console.log("Width of div element: " + styles.width);
console.log("Height of div element: " + styles.height);

---

6. Section 7

- Contoh 1, menambahkan event keydown. Saat menekan spasi maka akan muncul pop up dengan keterangan “Anda telah menekan tombol spasi pada keyboard!”

---

document.addEventListener("keydown", function(event) {
if (event.code === "Space") {
alert("Anda telah menekan tombol spasi pada keyboard!");
}
});

---

- Contoh 2, menambahkan event keydown. Saat menekan panah ke kanan pada keyboard maka background color akan berubah menjadi warna kuning

---

document.addEventListener("keydown", function(event) {
if (event.code === "ArrowRight") {
document.getElementById("klikkanan").style.backgroundColor = "kuning";
}
});

---

- Contoh 3, menambahkan event kliksaya. Saat di tekan maka background color akan berubah menjadi warna tomato

---

document.getElementById("kliksaya").addEventListener("click", function() {
this.style.backgroundColor = "tomato";
});

---

- Contoh 4, menambahkan mouseover. Saat cursor di arahkan ke teks “Arahkan cursor mouse disini!”, maka akan muncul pop up dengan keterangan “Anda mengarahkan cursor mouse pada bagian ini!”.

---

document.getElementById("div").addEventListener("mouseover", function() {
alert("Anda mengarahkan cursor mouse pada bagian ini!");
});

---

7. Section 8

- Contoh 1, saat salah satu jenis kelamin di klik maka kode akan menampilkan pesan sesuai dengan jenis kelamin yang dipilih

---

const maleRadio = document.getElementById("maleradio");
const femaleRadio = document.getElementById("femaleradio");

maleRadio.addEventListener("jenis kelamin", function() {
if (maleRadio.checked) {
console.log("Anda memilih laki-laki");
}
});

femaleRadio.addEventListener("jenis kelamin", function() {
if (femaleRadio.checked) {
console.log("Anda memilih perempuan");
}
});

---

- Contoh 2, kode hanya menampilkan nilai yang dipilih

---

var radios = document.getElementsByName('color');

for (var i = 0; i < radios.length; i++) {
radios[i].addEventListener('change', function() {
var selectedValue = document.querySelector('input[name="color"]:checked').value;
console.log('Warna yang anda pilih adalah:', selectedValue);
});
}

---

- Contoh 3, menampilkan teks yang kita ketik di field

---

const inputField = document.getElementById('masukkan');
const output = document.getElementById('output');

inputField.addEventListener('input', (event) => {
const inputValue = event.target.value;
output.innerText = `Kamu mengetik: ${inputValue}`;
output.style.display = 'block';
});

---

- Contoh 4

---

const myInput = document.getElementById('myinput');
const myOutput = document.getElementById('myoutput');

myInput.addEventListener('input', (event) => {
const inputValue = event.target.value;
if (inputValue < 0) {
myOutput.innerText = 'Masukan nilai minimal harus 0';
myOutput.style.display = 'block';
} else if (inputValue > 100) {
myOutput.innerText = 'Masukan nilai maksimal 100';
myOutput.style.display = 'block';
} else {
myOutput.style.display = 'none';
}
});

---
