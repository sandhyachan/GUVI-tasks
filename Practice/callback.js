const asianCountries = countries.filter(country => country.continent === "Asia");

console.log(asianCountries.map(country => country.name));

const url = 'https://example.com/countries';

// Using fetch to get the data
fetch(url)
  .then(response => response.json())
  .then(data => {
    const countries = data;

    // Using filter to get countries from Asia
    const asianCountries = countries.filter(country => country.continent === "Asia");

    // Logging names of Asian countries
    console.log(asianCountries.map(country => country.name));
  })
  .catch(error => console.error('Error fetching data:', error));

   url = 'https://example.com/countries';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const asianCountries = data.filter(country => country.continent === "Asia");
    console.log(asianCountries.map(country => country.name));
  })
  .catch(error => console.error('Error fetching data:', error));
