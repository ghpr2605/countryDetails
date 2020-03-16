let countriesList = [];

window.onload = () => {
    const countriesSelectEl = document.getElementById('countrySelect');
    const countriesApiUrl = 'https://restcountries.eu/rest/v2/all';
    
    fetch(countriesApiUrl)
        .then(result => result.json())
        .then(data => {
            countriesList = data;
            console.log(data);
            data.forEach(country => {
                const { alpha2Code, name } = country;
                const option = document.createElement('option');
                option.value = alpha2Code;
                option.innerText = name;
                countriesSelectEl.appendChild(option);
            });
        })  
}

function select(el){
    const countryCode = el.value;
    const contentEl = document.getElementById('content');
    const selectedCountry = countriesList.find(c => c.alpha2Code === countryCode);
    if(selectedCountry){
        const {flag, capital, population, currencies, callingCodes} = selectedCountry;
        const content = `
        <div>
            <img src="${flag}" class="card front"/>
            <div class="card back padding">
                <h3><li><u>Capital:</u> ${capital}</h3>
                <h3><li><u>Population:</u> ${population}</h3>
                <h3><li><u>Currency:</u> ${currencies[0].name}</h3>
                <h3><li><u>Currency Symbol:</u> ${currencies[0].symbol}</h3>
                <h3><li><u>Phone code:</u> +${callingCodes}</h3>
            </div>
        </div>   
      `;
      contentEl.innerHTML = content;
    }
}
