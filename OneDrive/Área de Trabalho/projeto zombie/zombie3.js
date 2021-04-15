function anaBF1(){
    var vidaHumano = 50

    alert(' A mae chamada Ana B. com fortes vínculos familiares, pratica Iogo todos os dias, tem um bom dialogo e tem uma flexibilidade e adaptação muito grandes, como habilidade possue')
    alert('após se separar do seu filho e sue marido anab procura se abrigar em meio aos descombros,de algum tempo escondido anab decide que é dada a hora de enfrentar seus medos e partir em busca de seus de se marido e seu filho.guiado pelo ódio anab sai caminhando em direção a uma sala.')
    alert('Você entrou na primeira sala, para percorrer o caminho até a saindo, neste momento você olha em volta e avista um humano que está correndo em sua direção.')
    
    for (;vidaZumbie >= 1 && vidaHumano >= 1;) {
        var acao = prompt('Você esta na primeira sala, você desaja:\n1- fugir \n2- atacar o humano')
        if(acao == 1){
            alert('Na primeira fase não se pode fugir, não tem para onde correr!!!')
        }else if(acao == 2){
            var danoZumbie = Math.floor(Math.random() * 50);
            var danoHumano = Math.floor(Math.random() * 50);
            vidaZumbie =  vidaZumbie - danoHumano
            vidaHumano = vidaHumano - danoZumbie
            alert(Voce atacou o humano e o humano efetuou um ataque:\nDano Zumbie: ${danoZumbie}\nDano Humano: ${danoHumano}\nVocê está com ${vidaZumbie} de vida e o Humano está com: ${vidaHumano} de vida.)
        }else{
            alert('Ação invalida')
        }
    }if(vidaZumbie <= 0){
        alert('Game Over\nVoltara para o inicio do jogo')
        startGamer()
    }else{
        alert('Voce venceu o humano e seguira para proxima fase')
        document.getElementById('demo').innerHTML = 'anab Fase 2'
        document.getElementById('faseButton').innerHTML = ' <button onclick="anabAf2()">Iniciar fase 2</button>'
        
    }

}
function anabAf2(){
    var vidaHumano = 50
    var fuga = 1
    alert('Você entrou na segunda sala , para percorrer o caminho até a saindo, neste momento você olha em volta e avista um humano que está correndo em sua direção.')
    
    while (vidaZumbie >= 1 && vidaHumano >= 1) {
        var acao = prompt('Você esta na segunda sala, você desaja:\n1- fugir \n2- atacar o humano')
        if(acao == 1){
            if(fuga > 0){
                vidaRecuperar = Math.floor(Math.random() * 30);
            vidaZumbie = vidaZumbie + vidaRecuperar
            alert(Você está voltando para recupera forças sua vida ira recuperar em: ${vidaRecuperar})
            alert('Voce voltou para sala anterior para recuperar um pouco de sua força, estará seguindo novamente para proxima sala!!!')
            fuga--
            }else{
                alert('voce já fugiu uma vez nesta sala, não é possível mais fugir')
            }
        }else if(acao == 2){
            var danoZumbie = Math.floor(Math.random() * 50);
            var danoHumano = Math.floor(Math.random() * 50);
            vidaZumbie =  vidaZumbie - danoHumano
            vidaHumano = vidaHumano - danoZumbie
            alert(Voce atacou o humano e o humano efetuou um ataque:\nDano Zumbie: ${danoZumbie}\nDano Humano: ${danoHumano}\nVocê está com ${vidaZumbie} de vida e o Humano está com: ${vidaHumano} de vida.)
        }else{
            alert('Ação invalida')
        }
    }if(vidaZumbie <= 0){
        alert('Game Over\nVoltara para o inicio do jogo')
        startGamer()
    }else{
        alert('Voce venceu o humano e seguira para proxima fase')
        document.getElementById('demo').innerHTML = 'anab Fase 3'
        document.getElementById('faseButton').innerHTML = ' <button onclick="anabAf3()">Iniciar fase 3</button>'
    }

}

function anabAf3(){
    var vidaHumano = 50
    alert('Você entrou na terceira sala , para percorrer o caminho até a saindo, neste momento você olha em volta e avista um humano que está correndo em sua direção.')
    
    while (vidaZumbie >= 1 && vidaHumano >= 1) {
        var acao = prompt('Você esta na segunda sala, você desaja:\n1- fugir \n2- atacar o humano')
        if(acao == 1){
            vidaRecuperar = Math.floor(Math.random() * 30);
            vidaZumbie = vidaZumbie + vidaRecuperar
            alert(Você está voltando para recupera forças sua vida ira recuperar em: ${vidaRecuperar})
            alert('Voce voltou para sala anterior para recuperar um pouco de sua força, estará seguindo novamente para proxima sala!!!')
        }else if(acao == 2){
            var danoZumbie = Math.floor(Math.random() * 50);
            var danoHumano = Math.floor(Math.random() * 50);
            vidaZumbie =  vidaZumbie - danoHumano
            vidaHumano = vidaHumano - danoZumbie
            alert(Voce atacou o humano e o humano efetuou um ataque:\nDano Zumbie: ${danoZumbie}\nDano Humano: ${danoHumano}\nVocê está com ${vidaZumbie} de vida e o Humano está com: ${vidaHumano} de vida.)
        }else{
            alert('Ação invalida')
        }
    }if(vidaZumbie <= 0){
        alert('Game Over\nVoltara para o inicio do jogo')
        startGamer()
    }else{
        alert('Voce venceu o humano e seguira para proxima fase')
        document.getElementById('demo').innerHTML = 'End Game'
        document.getElementById('faseButton').innerHTML = '<button onclick="endGame()">Reiniciar Jogo</button>'
    }

}