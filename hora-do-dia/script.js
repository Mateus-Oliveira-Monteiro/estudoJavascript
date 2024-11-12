function carregar(){
    var msg = document.getElementById('msg')
    var msg2 = document.getElementById('msg2')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = 'peito.jpg'
        document.body.style.background = '#e2cd9f'
        msg2.innerHTML = "Hora de treinar Peito"
    }else if (hora >= 12 && hora <= 18){
        img.src = 'costas.png'
        document.body.style.background = '#b9846f'
        msg2.innerHTML = "Hora de treinar Costas"
    } else {
        img.src = 'perna.jpg'
        document.body.style.background = '#515154'
        msg2.innerHTML = "Hora de treinar Perna"
    }
}
