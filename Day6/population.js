// Get all the countries with a population of less than 2 lakhs using Filter method


let url = 'https://restcountries.com/v3.1/all';

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Filter countries less than 200000 population
    var countries = data.filter(country => country.population <= 200000);

    // Get names of countries
    countries.forEach(country => {
      console.log(country.name.common);
    });
  })
  .catch(error => console.error('Error fetching data:', error));