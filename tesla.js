var header = document.getElementById('header')
var ms = document.getElementById('models')
var m3 = document.getElementById('model3')
var mx = document.getElementById('modelx')
var my = document.getElementById('modely')
var model = document.getElementById('model')

ms.addEventListener('click', ()=>{
    header.style.backgroundImage = "url(images/image-1.png)";
    model.textContent = "Model S"
})

m3.addEventListener('click', ()=>{
    header.style.backgroundImage = "url(images/image-2.png)";
    model.textContent = "Model 3"
})

mx.addEventListener('click', ()=>{
    header.style.backgroundImage = "url(images/image-3.png)";
    model.textContent = "Model X"
})

my.addEventListener('click', ()=>{
    header.style.backgroundImage = "url(images/image-4.png)";
    model.textContent = "Model Y"
})