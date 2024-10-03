let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
console.log(typeof(next));
next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

function getDetail(id){
    
}

function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const productId = getQueryParameter('id');
console.log(productId); // Sẽ in ra '1' nếu URL là /Slideshow-html-css-js/detail?id=1
