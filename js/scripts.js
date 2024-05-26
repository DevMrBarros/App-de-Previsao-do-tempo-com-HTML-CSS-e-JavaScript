// Clavis API OpenWeatherMap (Chave API OpenWeatherMap)
let chave = "cebcd482eda57fa9a6714c1c2ba91885";

// Functio quae datam in paginam ponit (Função que coloca dados na página)
function colocarNaTela(dados) {
  // Logga datam in consola (Log dados na console)
  console.log(dados);

  // Mutat textum elementi .cidade (Muda texto do elemento .cidade)
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;

  // Mutat textum elementi .temp (Muda texto do elemento .temp)
  document.querySelector(".temp").innerHTML =
    Math.floor(dados.main.temp) + "°C";

  // Mutat textum elementi .descricao (Muda texto do elemento .descricao)
  document.querySelector(".descricao").innerHTML = dados.weather[0].description;

  // Mutat src imaginis elementi .icone (Muda src da imagem do elemento .icone)
  document.querySelector(".icone").src =
    "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";

  // Mutat textum elementi .umidade (Muda texto do elemento .umidade)
  document.querySelector(".umidade").innerHTML =
    "Umidade: " + dados.main.humidity + "%";
}

// Functio quae urbem quaerit (Função que busca cidade)
async function buscarCidade(cidade) {
  try {
    // Petitio ad API OpenWeatherMap (Requisição à API OpenWeatherMap)
    let dados = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br" +
        "&units=metric"
    ).then((resposta) => resposta.json());

    // Vocat functio colocarNaTela (Chama função colocarNaTela)
    colocarNaTela(dados);
  } catch (error) {
    // Logga erro in consola (Log erro na console)
    console.error("Erro ao buscar cidade:", error);
  }
}

// Functio quae vocatur quando button est cliccatus (Função que é chamada quando o botão é clicado)
function cliqueiNoBotao() {
  // Captat valor input .input-cidade (Captura valor do input .input-cidade)
  let cidade = document.querySelector(".input-cidade").value.trim();

  // Si valor non est vacuum (Se valor não estiver vazio)
  if (cidade !== "") {
    // Vocat functio buscarCidade (Chama função buscarCidade)
    buscarCidade(cidade);
  } else {
    // Monitio usario (Avisa usuário)
    alert("Por favor, digite o nome da cidade.");
  }
}
