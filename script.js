function imageSubmit(event ){
    if(event.keyCode==13){
        console.log("New Image")
        imgURL=document.getElementById("imageURL").value;
        console.log(imgURL);
        document.getElementById("imageURL").src=imgURL;
        window.location.reload();

    }
}   