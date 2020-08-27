function searchpk(){
    let url =  'http://pokeapi.co/api/v2/pokemon/'+ (document.getElementById('input-nome').value).toLowerCase();
    fetch(url)
    .then((response) => {
        return response.json();
        
    })
    .then((data) =>{
        console.clear();
        for (variavel in data.types){
            console.log(data.types[variavel].type.name);
        }
        
        
        document.getElementById("pokemon-front").src = data.sprites.front_default
        document.getElementById("pokemon-nome").innerHTML = data.name.toUpperCase();
        document.getElementById("pokemon-tipo").innerHTML = 'Tipo: ' + data.types[0].type.name;
        document.getElementById("pokemon-peso").innerHTML = 'Peso: ' + data.weight;
        document.getElementById("pokemon-tamanho").innerHTML = 'Tamanho: ' + data.height;
        document.getElementById("pokemon-hp").innerHTML = 'HP: ' + data.stats[0].base_stat;
        document.getElementById("pokemon-defesa").innerHTML = 'Defesa: ' + data.stats[2].base_stat;
        document.getElementById("pokemon-ataque").innerHTML = 'Ataque: ' + data.stats[1].base_stat;
        document.getElementById("pokemon-velocidade").innerHTML = 'Velocidade: ' + data.stats[5].base_stat;
        $('#card-collapse').collapse('show');
        
    })
    .catch((erro) => {
        alert("Erro ao buscar Pokemon.")
        $('#card-collapse').collapse('hide')
        $('#card-collapse').collapse('dispose');
        console.log(erro);
    });
}

document.getElementById("search").onclick = searchpk;