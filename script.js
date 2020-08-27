$('#search').on("click",function(){
    let url =  'http://pokeapi.co/api/v2/pokemon/'+ (document.getElementById('input-nome').value).toLowerCase();
    fetch(url)
    .then((response) => {
        return response.json();
        
    })
    .then((data) =>{
        $("#lista-tipo").empty();
        $("#lista-habilidades").empty();
        for(tipo in data.types){
            $("#lista-tipo").append(`<li><a onclick="return searchTipo('${data.types[tipo].type.url}');">${data.types[tipo].type.name}</a></li>`)
        }
        for(habilidade in data.abilities){
            $("#lista-habilidades").append(`<li><a onclick="return showShortEffect('${data.abilities[habilidade].ability.url}')">${data.abilities[habilidade].ability.name}</a></li>`)
        }
        document.getElementById("pokemon-front").src = data.sprites.front_default
        document.getElementById("pokemon-nome").innerHTML = data.name.toUpperCase();
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
});

function searchTipo(tipo) {
    let url =  tipo
    fetch(url)
    .then((response) => {
        return response.json();
        
    })
    .then((data) =>{
        $("#ModalLabel").append('Lista de pokemons do mesmo tipo')
        for (poke in data.pokemon){
            $("#lista-caracteristica-pokemon").append('<li><a>'+data.pokemon[poke].pokemon.name+'</a></li>');
        }
        
    })
    .catch((erro) => {
        alert("Erro ao buscar Pokemon.");
        console.log(erro);
        
    });
    $('#ModalPokemonTipo').modal('show');

    
}

function showShortEffect(effect) {
  
    
    let url =  effect
    
    fetch(url)
    .then((response) => {
        return response.json();
        
    })
    .then((data) =>{
        $("#ModalLabel").append('Efeito da habilidade')
        for (efeito in data.effect_entries){
            
            if (data.effect_entries[efeito].language.name == 'en') {
                $("#lista-caracteristica-pokemon").append('<li><a>'+data.effect_entries[efeito].short_effect+'</a></li>');  
            } 
            
        }
        
    })
    .catch((erro) => {
        alert("Erro ao buscar Pokemon.");
        console.log(erro);
        
    });
    $('#ModalPokemonTipo').modal('show');
    

    
}

$(document).ready(function() {
    $(".modal").on("hidden.bs.modal", function() {
        $("#ModalLabel").html("");
        $("#lista-caracteristica-pokemon").html("");
    });
  });
