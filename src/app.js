import axios from "axios";

console.log("hopelijk werkt het")
// const fetchDataFromCountryApi = async (all) => {
//
//     const URI = `https://restcountries.com`
//     const endpoint = `/v2/${all}`
// }
//
//     try {
//         const response = await axios.get (`${URI}${endpoint}`);
//         console.log(response.data.all)
//     } catch (e) {
//         console.error(e)
//     }

async function fetchDataFromCountryApi() {
    try {
        const response = await axios.get(`https://restcountries.com/v2/all`);
        console.log(response.data)
        const countries = response.data;
        // const responseAddedInHTML = document.getElementById("all-countries");
        countries.sort((low, high) => {
            return low.population - high.population;
        });
        countriesList(countries);

    } catch (e) {
        console.error(e);
    }
}
fetchDataFromCountryApi();

function countriesList(countries) {
    let responseAddedInHTML = document.getElementById("all-countries")
    responseAddedInHTML.innerHTML = countries.map((country)=>{
        return `
        <li>
            <h2 class="${changeColorCountry(country.region)}">${country.name}</h2>
            <img src="${country.flags.png}" alt="flag of ${country.name}" class="flags">
            <p class="population">has a population of ${country.population} people</p>
        </li>`;
    }).join(" ")
}

function changeColorCountry(region) {
    switch (region) {
        case "Asia":
            return 'asia';
        case "Europe":
            return 'europa';
        case "Afrika":
            return 'afrika';
        case "Americas":
            return 'americas'
        case "Oceania":
            return 'oceania';
        default:
            return "otherCountries";

    }
}

// async function fetchDataRestCountriesApi() {
//     try {
//         const response = await axios.get('https://restcountries.com/v2/all');
//         const countries = response.data;
//         countries.sort((low, high) => {
//             return low.population - high.population;
//         });
//         countryList(countries);
//     } catch (e) {
//         console.error(e);
//     }
// }
//
// fetchDataRestCountriesApi();
// function countryList(countries) {
//     let responseAddedInHtml = document.getElementById('country-list')
//     responseAddedInHtml.innerHTML = countries.map((country) => {
//         return `
//         <li>
//             <img src="${country.flags.png}" alt="Country Flag" class="vlaggetjes">
//             <h3 class="${changeColorCountry(country.region)}">${country.name}</h3>
//             <p class="population">Has a population of ${country.population} people</p>
//         </li>
//         `;
//     }).join(" ");
// }
// responseAddedInHTML.innerHTML = `
//         <li>
//             <h2>${response.data.name}</h2>
//         </li>`