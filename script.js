function imageSubmit(event) {
  if (event.keyCode == 13) {
    console.log("New Image");
    var imgURL = document.getElementById("imageURL").value;
    var list = document.getElementById("imgView");
    list.removeChild(list.childNodes[0]);
    console.log(imgURL);
    var img = document.createElement("img")
    img.src = imgURL;
    list.appendChild(img);
  }
}
