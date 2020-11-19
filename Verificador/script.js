function verificar(){
    // Recebe o ano informado pelo usuário
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    // Manipulador da área onde coloca o resultado do teste
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        // Teste para saber se o ano inserido pelo usuário é válido
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)// Exibe alerta para o usuário
    }else{
        var fsex = document.getElementsByName('radsex')// Recebe os 'radio buttons'
        var idade = ano - Number(fano.value)// Calcula a idade
        var genero = ''// Variável para receber o gênero
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','foto-bebe-m.png')
            }else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
    
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','foto-bebe-f.png')
            }else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src','foto-jovem-f.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src','foto-idoso-f.png' )
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` // Montando e exibindo a resposta para o usuário
        res.appendChild(img) // Acrescentando a foto na resposta

    }

}

   