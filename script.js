function enviar(){
    window.alert("Seus dados foram salvos")
}

function gravar(){
    const nome = document.querySelector("#nome").value
    const email = document.querySelector("#email").value
    const telefone = document.querySelector("#telefone").value
    const cpf = document.querySelector("#cpf").value
    const senha = document.querySelector("#senha").value
    localStorage.setItem("nome", nome)
    localStorage.setItem("email", email)
    localStorage.setItem("telefone", telefone)
    localStorage.setItem("cpf", cpf)
    localStorage.setItem("senha", senha)

}

const abrir = document.querySelector("#abrirmodal")
const modal = document.querySelector("#modal")

abrir.addEventListener("click", ()=>{
    modal.showModal()
})

addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("#nomerec").innerHTML=localStorage.getItem("nome")
    document.querySelector("#emailrec").innerHTML=localStorage.getItem("email")
    document.querySelector("#telefonerec").innerHTML=localStorage.getItem("telefone")
    document.querySelector("#cpfrec").innerHTML=localStorage.getItem("cpf")
    document.querySelector("#senharec").innerHTML=localStorage.getItem("senha")
})

