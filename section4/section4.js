// membuat elemen baru
var newListItem = document.createElement("li");
var textNode = document.createTextNode("Tulisan ke-4");
newListItem.appendChild(textNode);
document.getElementById("list").appendChild(newListItem);

// membuat elemen image baru
var newImage = document.createElement("img");
newImage.setAttribute("src", "https://tse4.mm.bing.net/th?id=OIP.BMDq38G7vr2bYc-yft241gHaD7&pid=Api&P=0");
document.getElementById("div").appendChild(newImage);

// membuat elemen button baru
var newButton = document.createElement("button");
var textNode = document.createTextNode("Klik Disini");
newButton.appendChild(textNode);
document.body.appendChild(newButton);
