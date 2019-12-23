var countriesList = [];

window.onload = () => {
    const countriesSelectEl = document.getElementById('countrySelect');
    const countriesApiUrl = 'https://restcountries.eu/rest/v2/all';
    
    fetch(countriesApiUrl)
        .then(result => result.json())
        .then(data => {
            countriesList = data;
            console.log(data);
            data.forEach(country => {
                const option = document.createElement('option');
                option.value = country.alpha2Code;
                option.innerText = country.name;
                countriesSelectEl.appendChild(option);
            });
        })  
}
