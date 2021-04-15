var vidaZumbie = 150

function startGamer() {

    alert('Em um mundo de caos e destruição, apos um apocalipse onde um virus dizimou 97% da população mundial os humanos lutam para sobreviver contra os zumbie, apos 150 anos de luta os humanos passaram a controlar a população zumbie, porem em meio a estes zumbie ouve um casso especifico onde uma familia foi infectada porem não teve sua consciência desvaiada e passou por mutações, entre essa familia de 3 membros tem.')


    while (true) {
        var qualPersonagem = prompt('Escolha um personagem: \n1- Lucas A.\n2- Ana B.\n3- Luiz H.')
        if (qualPersonagem == 1) {
            alert('Lucas A. escolhido')
            document.getElementById('demo').innerHTML = '<h1>Lucas Fase 1</h1><img src="./images/mundo.jpeg" alt="imagem mundo"><h2>lusca está se aventurando nessa fase</h2><button onclick="lucasAf1()">Iniciar fase 1</button>'

           
            break;
        } else if (qualPersonagem == 2) {
            alert('Ana B. escolhido')
            anaBF1()
            break;
        } else if (qualPersonagem == 3) {
            alert('Luiz H.. escolhido')
            luizHf1()
            break;
        } else {
            alert('Personagem invalido')
        }
    }
}

function endGame(){
    alert("Jogo finalizado")
    vidaZumbie = 150;
    document.getElementById('demo').innerHTML = 'inicio da aventura'
    document.getElementById('faseButton').innerHTML = '<button onclick="startGamer()">Iniciar a aventura</button>'
}
