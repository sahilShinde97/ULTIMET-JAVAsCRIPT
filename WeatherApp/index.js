const url = 'https://the-weather-api.p.rapidapi.com/api/weather/mumbai';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4bc0839622msh77e4df3af780cf6p196ffbjsncb72c336da5b',
    'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
  }
};

fetch(url, options)
  .then(response => response.text())
  .then(response => console.log(response))
  .catch(err => console.error(err));
