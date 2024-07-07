// Print the country that uses US dollars as currency.

let url = 'https://restcountries.com/v3.1/all';

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Filter countries from Asia currencies
    var countries = data.filter(country => country.currencies && country.currencies.USD);

    // Logging names of Asian countries
    countries.forEach(country => {
      console.log(country.name.common);
    });
  })
  .catch(error => console.error('Error fetching data:', error));