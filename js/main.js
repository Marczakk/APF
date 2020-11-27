window.addEventListener('scroll', function(){
    var header = document.querySelector('.nav');
    header.classList.toggle('sticky', window.scrollY > 0)
})


document.querySelector('.menu-btn').addEventListener('click', () => 

document.querySelector('.links').classList.toggle('show'));