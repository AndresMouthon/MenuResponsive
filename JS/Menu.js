const btn_toggle = document.querySelector(".btn-menu")
const menu_toggle = document.querySelector(".container")

btn_toggle.addEventListener("click", () => {
    menu_toggle.classList.toggle("contenedor_visible")
})