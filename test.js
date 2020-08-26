function searchpk(){
    let url =  'http://pokeapi.co/api/v2/pokemon/pikachu';
    fetch(url)
    .then((response) => {
        return response.json();
        
    })
    .then((data) =>{
        console.log(data);
        
    })
    .catch((erro) => {
        console.log("Erro");
        console.log(erro);
    });
}

document.getElementById("search").onclick = searchpk;