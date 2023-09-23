
//elementos
const botaoObter = document.getElementById('getWeather');
const imprimir = document.getElementById('result');
const inputLocal = document.getElementById('getLocal');
const imgClima = document.getElementById('weather-icon');

//variáveis
var cidade = 'Montes Claros';
var dadosClima;
const appId = '864eb70685a4d32c8d837c4f0aa57b68';
var statusClima;
var txtVazio = inputLocal.value;
var erroEncontrado;

botaoObter.addEventListener("click", mostrarDados);
  
function pesquisarClima(urlClima){
fetch(urlClima)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    dadosClima = data;
    
    })
  .catch(error => {
    console.error('Erro ao obter dados da API:', error);
    erroEncontrado=error;
  });
  
}
  var urlClimaAtual;

  /*
  // url backup
  urlClimaAtual= ('https://api.openweathermap.org/data/2.5/weather?lat='+latCidade+'&lon='+lonCidade+'&appid='+appId+'&units=metric&lang=pt_br');
  */
  function escreverDados(){
    statusClima = ('Local: '+(dadosClima.name)+'<br>'+(dadosClima.weather[0].description)+'<br>Temperatura atual: '+(dadosClima.main.temp)+' °C');
    
    if(dadosClima.weather[0].main=="Clear"){imgClima.src = "images/sunny.png";}
    else if(dadosClima.weather[0].main=="Cloud"){imgClima.src = "images/cloud.png";}
    else if(dadosClima.weather[0].main=="Snow"){imgClima.src = "images/snow.png";}
    else if(dadosClima.weather[0].main=="Rain"){imgClima.src = "images/rainy.png";}
    
    imprimir.innerHTML = statusClima;
    botaoObter.textContent="Obter Previsão do Tempo"
  
}
function mostrarDados(){
  
  cidade = inputLocal.value;
  if(cidade==""){
    imprimir.innerHTML = "Digite um nome de cidade para pesquisar";
    setTimeout(()=>{imprimir.innerHTML = ""},3000)
  }else{
    botaoObter.textContent = "Pesquisando...";
    cidade = inputLocal.value;
  urlClimaAtual= ('https://api.openweathermap.org/data/2.5/weather?q='+cidade+',br&appid='+appId+'&units=metric&lang=pt_br');
    pesquisarClima(urlClimaAtual);
    setTimeout(()=>{escreverDados();},2000);
  }
}

