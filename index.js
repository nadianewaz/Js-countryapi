// function loadCountry(){
//         fetch(`https://restcountries.com/v3.1/all`)
//         .then(res => res.json())
//         .then(countrydata => displayCountry(countrydata))
// }
// loadCountry();

// function displayCountry(data){
//   for(let country of data){

//   let container = document.getElementById("country_API");
//   let country_API = document.createElement("div");
//   country_API.classList.add("single-country");
//   let h3 = document.createElement("h3");
//   h3.innerHTML = country.name.common;
//   country_API.appendChild(h3);
//   let p = document.createElement("p");
//   p.innerHTML = country.capital;
//   country_API.appendChild(p);
//   container.appendChild(country_API);

//   }

// }

function loadCountry() {
  fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((countrydata) => displayCountry(countrydata));
}
loadCountry();

let container = document.getElementById("country_API");

function displayCountry(countrydata) {
  for (let singleCountry of countrydata) {
    // console.log(singleCountry.name);
    // console.log(singleCountry);
    let singlecountryData = document.createElement("div");
    singlecountryData.classList.add("API_of_countries");
    singlecountryData.innerHTML = `
    <h1> ${singleCountry.name.common} </h1>
    <p> ${singleCountry.capital} </p>
    <a href="${singleCountry.maps.googleMaps}" target="_blank"> Open Map </a>
    
    <button onclick="loadCountryByName('${singleCountry.name.common}')"> Details</button>
    
    `;
    container.appendChild(singlecountryData);
  }
}

// == All Data of a Single Country ==
function loadCountryByName(name) {
  //console.log("novel");
  let url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((countryDataApi) => displayCountryData(countryDataApi[0]));
}

function displayCountryData(tempData) {
  console.log(tempData.name.common);
  console.log(tempData.capital[0]);
  console.log(tempData.population);

  let countryDetailsDiv = document.getElementById("details");
  countryDetailsDiv.innerHTML = `

    <h1> ${tempData.name.common} </h1>
    <h3> ${tempData.capital[0]} </h3>
    <h3> ${tempData.population} </h3>
    `;
}
