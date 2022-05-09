const open1 = document.getElementById("open"),
    close1 = document.getElementById("close"),
    container = document.querySelector(".container"),
    containerCircle = document.querySelector(".container-circle");

open1.addEventListener('click',()=> {
    container.classList.add('container-rotate');
    containerCircle.classList.add('container-rotate');
})

close1.addEventListener("click", () => {
    container.classList.remove("container-rotate");
    containerCircle.classList.remove("container-rotate");
});
