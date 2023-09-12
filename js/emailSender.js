function sendEmail(){
    emailjs.init("");

    let email = document.getElementById("emailAddres");
    let msg = document.getElementById("msg");
    let btn = document.getElementById("enviar");

    if(!email.value && !msg.value) return;

    let templateParams = {
        from_name:  email.value,
        message: msg.value,
    }
    
    btn.style.backgroundColor = "#6fb7cd";
    btn.innerHTML = '<i class="fa-solid fa-rotate fa-spin" style="color: #ffffff;"></i>';

    emailjs.send("emailSender", "template_fycrdau", templateParams, "")
    .then(response => {
        console.log("Sucesso! - ","[" + response.status + "] - ", response.text)

        btn.innerHTML = '<i class="fa-solid fa-check" id="check" style="color: #ffffff"></i>'
    }).catch(err => {
        console.log("[Erro]", err)
    })

    setTimeout(() => {
        btn.innerHTML = 'Enviar'
        btn.style.backgroundColor = "white";
        
      }, "3000");
}