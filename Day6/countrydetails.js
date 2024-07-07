// Print the following details name, capital, flag, using forEach method

let url = 'https://restcountries.com/v3.1/all';

fetch(url)
  .then(response => response.json())
  .then(data => {

    // Get details of countries
    data.forEach(function(country) {
      console.log(`Country name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flag}
        `)
    });
  })
  .catch(error => console.error('Error fetching data:', error));