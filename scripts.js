const formulario = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function cliqueinobotao() {
    alert("Você clicou no botão")
    formulario.style.left = "50%"
    formulario.style.transform = " translateX(-50%)"
    mascara.style.visibility = "visible"
}

function clicar() {
    formulario.style.left = "-300px"
    formulario.style.transform = " translateX(0)"
    mascara.style.visibility = "hidden"
}

