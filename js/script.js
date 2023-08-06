const menu = document.querySelectorAll("nav .material-symbols-outlined"),
    allLinks = document.querySelector("nav .links")


menu.forEach((item, i) => {
    item.addEventListener("click", () => {
        if(i == 0) {
            allLinks.style.right = 0;
        }
        else {
            allLinks.style.right = `-580px`;
        }
    })
})