// Get all the countries from Asia continent /region using Filter method

let url = 'https://restcountries.com/v3.1/all';

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Filter countries from Asia region
    var asianCountries = data.filter(country => country.region === 'Asia');

    // Get names of Asian countries
    asianCountries.forEach(country => {
      console.log(country.name.common);
    });
  })
  .catch(error => console.error('Error fetching data:', error));