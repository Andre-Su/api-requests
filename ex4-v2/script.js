
//elementos
const botaoObter = document.getElementById('getWeather');
const imprimir = document.getElementById('result');
const inputLocal = document.getElementById('getLocal');
const imgClima = document.getElementById('weather-icon');

//variáveis
var latCidade;
var lonCidade;
var cidade = 'Montes Claros';
var dadosClima;
var appId = '864eb70685a4d32c8d837c4f0aa57b68';

var txtVazio = inputLocal.value;


botaoObter.addEventListener("click", mostrarDados);

//imgClima.src = "images/cloud.png"
//imgClima.src = "images/rainy.png"
//imgClima.src = "images/snow.png"
//imgClima.src = "images/sunny.png"

/* // Comentado até eu conseguir resolver o erro do objeto de coordenadas
function pesquisarLocal(cidade){
//api localização
var dadosLocal;
let urlLugarClima ='http://api.openweathermap.org/geo/1.0/direct?q='+cidade+',br&limit=2&appid=864eb70685a4d32c8d837c4f0aa57b68';
fetch(urlLugarClima)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    dadosLocal = data;
    latCidade = data[0].lat.toString();
    lonCidade = data[0].lon;
    console.log(latCidade);
    console.log(lonCidade);
    })
  .catch(error => {
    console.error('Erro ao obter dados da API:', error);
  });
  latCidade = latCidade.toString();
  lonCidade = lonCidade.toString();

  latCidade = latCidade.replace('.', ',');
  console.log(latCidade);

  lonCidade = lonCidade.replace('.', ',');
  console.log(lonCidade);
}
*/

  latCidade = '-16.7273538';
  lonCidade = '-43.8717676';



  
function pesquisarClima(urlClima){
fetch(urlClima)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    dadosClima = data;
    
    })
  .catch(error => {
    console.error('Erro ao obter dados da API:', error);
  });
  return 'Local: '+(dadosClima.name)+'<br>'+(dadosClima.weather[0].description)+'<br>Temperatura atual: '+(dadosClima.main.temp)+' °C';
}
  let urlClimaAtual;

  /*
  urlClimaAtual= ('https://api.openweathermap.org/data/2.5/weather?lat='+latCidade+'&lon='+lonCidade+'&appid='+appId+'&units=metric&lang=pt_br');
  */
function mostrarDados(){
  let status;
  cidade = inputLocal.value;
  if((inputLocal.value)===(txtVazio)){
    imprimir.innerHTML = "Digite um nome de cidade para pesquisar";
  }else{
    cidade = inputLocal.value;
  urlClimaAtual= ('https://api.openweathermap.org/data/2.5/weather?q='+cidade+',br&appid='+appId+'&units=metric&lang=pt_br')
    
    status = pesquisarClima(urlClimaAtual);
    imprimir.innerHTML = status
  }
}

