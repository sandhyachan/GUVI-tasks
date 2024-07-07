// Print the total population of countries using reduce method

let url = 'https://restcountries.com/v3.1/all';

fetch(url)
  .then(response => response.json())
  .then(data => {
    
  // Get total population usig reduce method
      var totalPopulation = data.reduce((accumulator, country) => {
        return accumulator + country.population;
      }, 0);
      
      console.log(totalPopulation)}
    )
  .catch(error => console.error('Error fetching data:', error))