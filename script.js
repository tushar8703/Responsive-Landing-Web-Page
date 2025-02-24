const navigationBar = document.querySelector(".navBar");
const menuBtn = document.querySelector(".menuBtn");


menuBtn.addEventListener("click", ()=> {
    navigationBar.classList.toggle("active");

})


navigationBar.addEventListener("click", ()=> {
    navigationBar.style =
    '    position: flex',
       ' right: -100%';
    navigationBar.classList.toggle("active");
    
})

