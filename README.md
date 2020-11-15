---
name: "Image Filters"
description: "Lets add filters to images using css."
author: "@bezlin6mechminerz"
---

All of us try out filters when we take a selfie. Ever wondered how those work? That's what we are going to do today.We will use CSS for
adding different kinds of filter to an image.

The workshop will look something like this.

![Output video](https:/3/cloud-62ium4cvk.vercel.app/0ezgif.com-gif-maker.gif)

View a [live demo](https://repl.it/@bezlin/trialtkinterpy-2#main.py)

View the [final code](https://repl.it/@bezlin/trialtkinterpy-2#main.py)

This workshop will take about 20 minutes.

## Getting started


We will be using [Repl.it.](https://repl.it) It is awesome because you can code online. Just follow this link and start coding!. Your coding environment will be ready in a few seconds!

After that create a new repl and select language HTML, CSS, JS.

![repl](https://cloud-ns067nqq8.vercel.app/0screenshot_2020-10-23_at_12.10.50_am.png)
## Code and explanation


![run it](https://cloud-rd9uv1ixb.vercel.app/0ezgif.com-gif-maker__1_.gif)

## Let's Code!

![Coding cat](https://cloud-9jbocmbrc.vercel.app/0giphy.gif)

### Let's start with the basic HTML structure.

```html
<!doctype html>

<head>
<script src="script.js"></script>
<link rel="stylesheet" href="style.css">
</head>

<body>
</body>

</html>
```

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

We add this to make the webpage responsive.

```html
<input type="checkbox" id="togglebtn1" />
<label for="togglebtn1" id="filter1">B&W</label>
```

//
```html
<input type="checkbox" id="togglebtn1" />
<label for="togglebtn1" id="filter1">B&W</label>
<input type="checkbox" id="togglebtn2" />
<label for="togglebtn2" id="filter2">contrast</label>
<input type="checkbox" id="togglebtn3" />
<label for="togglebtn3" id="filter3">Bria</label>
```
//

```html
  <div class="title"><h1>Image Filter</h1></div>
```
//

```html
 <input
    id="imageURL"
    placeholder="Image URL"
    onkeypress="imageSubmit(event)"
  />
```
//

```html
<div id="imgView">
    <img
      id="imgprev"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tNQcCZ1dW36Ee1xzTJ17AwHaEK%26pid%3DApi&f=1"
      alt="Image Not Found"
    />
  </div>

```
//

Now, the html file will look like this

```html
<!DOCTYPE html>

<head>
  <title>Image Filters</title>
  <script src="./script.js"></script>
  <link rel="stylesheet" href="./style.css" />
</head>
<body>
  <input type="checkbox" id="togglebtn1" />
  <label for="togglebtn1" id="filter1">B&W</label>
  <input type="checkbox" id="togglebtn2" />
  <label for="togglebtn2" id="filter2">contrast</label>
  <input type="checkbox" id="togglebtn3" />
  <label for="togglebtn3" id="filter3">Bria</label>
  <div class="title"><h1>Image Filter</h1></div>
  <input
    id="imageURL"
    placeholder="Image URL"
    onkeypress="imageSubmit(event)"
  />
  <div id="imgView">
    <img
      id="imgprev"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tNQcCZ1dW36Ee1xzTJ17AwHaEK%26pid%3DApi&f=1"
      alt="Image Not Found"
    />
  </div>
</body>


```

### Time for some JavsScript

```javascript
function imageSubmit(event ){
    if(event.keyCode==13){
        console.log("New Image");
        var imgUrl=document.getElementById("imageURL").value;
        document.getElementById("imageURL").value="";
        console.log(imgUrl);
        document.getElementById("imgprev").src=imgUrl;
    }
}   


```
//
### Let style it with CSS

```css
body{
    background-color: rgba(128, 128, 128, 0.774);
}
.title{
    width: 100%;
    background: #136a8ac2;  
    color: white;
    box-shadow:0 0 10px 2px black;
    left: 0;
    top: 0;
    position: absolute;
}
#imageURL{
    position: absolute;
    margin-top: 35%;
    left: 30%;
    width: 30%;
    border: 1px solid grey;
    outline: none;
}
img{
    margin-top: 10%;
    left: 30%;
    position: relative;
    border-radius:16px ;
    max-width: 500px;
    box-shadow:inset 0 0 10px 5px black;
}
img:hover{
    box-shadow: 0 0 20px 5px black;
}
#filter1{
    position: absolute;
    top: 60%;
    left: 20%;
    background:grey;
    border: none;
    border-radius: 5px;
    width: 10%;
    text-align: center;
    height: 3%;
    user-select: none;
}

#filter2{
    position: absolute;
    top: 60%;
    left: 35%;
    background:grey;
    border: none;
    border-radius: 5px;
    width: 10%;
    text-align: center;
    height: 3%;
    user-select: none;
}
#filter3{
    position: absolute;
    top: 60%;
    left: 50%;
    background:grey;
    border: none;
    border-radius: 5px;
    width: 10%;
    text-align: center;
    height: 3%;
    user-select: none;
}
#filter1:hover{
    box-shadow: 0 0 10px 2px black;
}
#filter2:hover{
    box-shadow: 0 0 10px 2px black;
}
#filter3:hover{
    box-shadow: 0 0 10px 2px black;
}


```
// basic css

```css
#togglebtn1{
    display: none;
}
```
//

```css
#togglebtn2{
    display: none;
}
#togglebtn3{
    display: none;
}
```

## Now let's see how we add filters 
```css
#togglebtn1:checked~#imgView{
    filter: saturate(0%);
}
```
//


```css
#togglebtn1:checked~#filter1{
    background:rgba(0, 0, 255, 0.493);
}
```
//

```css
#togglebtn2:checked~#imgView{
    filter: contrast(170%);
}
#togglebtn2:checked~#filter2{
    background: green;
}
#togglebtn3:checked~#imgView{
    filter: brightness(150%);
    filter: sepia(30%);

}
#togglebtn3:checked~#filter3{
    background: rgba(255, 0, 0, 0.925);
}
```
//

### And we are done 
```css
body{
    background-color: rgba(128, 128, 128, 0.774);
}
.title{
    width: 100%;
    background: #136a8ac2;  
    color: white;
    box-shadow:0 0 10px 2px black;
    left: 0;
    top: 0;
    position: absolute;
}
#imageURL{
    position: absolute;
    margin-top: 35%;
    left: 30%;
    width: 30%;
    border: 1px solid grey;
    outline: none;
}
img{
    margin-top: 10%;
    left: 30%;
    position: relative;
    border-radius:16px ;
    max-width: 500px;
    box-shadow:inset 0 0 10px 5px black;
}
img:hover{
    box-shadow: 0 0 20px 5px black;
}
#togglebtn1{
    display: none;
}
#togglebtn2{
    display: none;
}
#togglebtn3{
    display: none;
}
#filter1{
    position: absolute;
    top: 60%;
    left: 20%;
    background:grey;
    border: none;
    border-radius: 5px;
    width: 10%;
    text-align: center;
    height: 3%;
    user-select: none;
}
#filter2{
    position: absolute;
    top: 60%;
    left: 35%;
    background:grey;
    border: none;
    border-radius: 5px;
    width: 10%;
    text-align: center;
    height: 3%;
    user-select: none;
}
#filter3{
    position: absolute;
    top: 60%;
    left: 50%;
    background:grey;
    border: none;
    border-radius: 5px;
    width: 10%;
    text-align: center;
    height: 3%;
    user-select: none;
}
#filter1:hover{
    box-shadow: 0 0 10px 2px black;
}
#filter2:hover{
    box-shadow: 0 0 10px 2px black;
}
#filter3:hover{
    box-shadow: 0 0 10px 2px black;
}

#togglebtn1:checked~#imgView{
    filter: saturate(0%);
}
#togglebtn1:checked~#filter1{
    background:rgba(0, 0, 255, 0.493);
}

#togglebtn2:checked~#imgView{
    filter: contrast(170%);
}
#togglebtn2:checked~#filter2{
    background: green;
}

#togglebtn3:checked~#imgView{
    filter: brightness(150%);
    filter: sepia(30%);

}
#togglebtn3:checked~#filter3{
    background: rgba(255, 0, 0, 0.925);
}
```
## Now it's your to hack

Now you know how to turn text to speech. You can do a lot with it. Make it read stories,recite poems,rap some songs that you wrote,send greeting.
Have fun.### Now it's your to hack

Now you know how to turn text to speech. You can do a lot with it. Make it read stories,recite poems,rap some songs that you wrote,send greeting.
Have fun.

## Modified by other hackers.

