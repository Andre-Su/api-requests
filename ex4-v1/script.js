//variáveis
var latCidade;
var lonCidade;

//elementos
const botaoObter = document.getElementById('getWeather');
const imprimir = document.getElementById('result');
const inputLocal = document.getElementById('getLocal');
const imgClima = document.getElementById('weather-icon');

botaoObter.addEventListener("click", mostrarDados);

//imgClima.src = "images/cloud.png"
//imgClima.src = "images/rainy.png"
//imgClima.src = "images/snow.png"
//imgClima.src = "images/sunny.png"

/*
//var cidade
var cidade = 'Montes Claros';
//api localização
var dadosLocal;
let urlLugarClima ='http://api.openweathermap.org/geo/1.0/direct?q='+cidade+',br&limit=2&appid=864eb70685a4d32c8d837c4f0aa57b68';
fetch(urlLugarClima)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    dadosLocal = data;
    latCidade = data[0].lat;
    lonCidade = data[0].lon;
    console.log(latCidade);
    console.log(lonCidade);
    })
  .catch(error => {
    console.error('Erro ao obter dados da API:', error);
  });
  */
  latCidade = '-16.7273538';
  lonCidade = '-43.8717676';

  latCidade = latCidade.replace('.', ',');
  console.log(latCidade);

  lonCidade = lonCidade.replace('.', ',');
  console.log(lonCidade);


var dadosClima;
let urlClimaAtual= ('https://api.openweathermap.org/data/2.5/weather?lat='+latCidade+'&lon='+lonCidade+'&appid=864eb70685a4d32c8d837c4f0aa57b68&units=metric&lang=pt_br');
  fetch(urlClimaAtual)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    dadosClima = data;
    })
  .catch(error => {
    console.error('Erro ao obter dados da API:', error);
  });

function mostrarDados(){
    let status = 'Local: '+(dadosClima.name)+'<br>'+(dadosClima.weather[0].description)+'<br>Temperatura atual: '+(dadosClima.main.temp)+' °C';
    
    imprimir.innerHTML = status
}