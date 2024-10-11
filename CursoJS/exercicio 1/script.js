function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        // Boa dia
        msg.innerHTML += ' Bom dia!!!'
        img.src = 'foto_dia.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        // Boa tarde
        msg.innerHTML += ' Boa tarde!!!'
        img.src = 'foto_tarde.jpg'
        document.body.style.background = '#b9846f'
    } else{
        // Boa tarde
        msg.innerHTML += ' Boa noite!!!'
        img.src = 'foto_noite.jpg'
        document.body.style.background = '#515154'
    }
}
