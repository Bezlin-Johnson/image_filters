function imageSubmit(event ){
    if(event.keyCode==13){
        console.log("New Image");
        var imgUrl=document.getElementById("imageURL").value;
        document.getElementById("imgprev").src=imgUrl;
    }
}   
