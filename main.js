

const searchInput = document.getElementById('country-name')
const searchBtn = document.getElementById('search-btn')



// fetching country data from https://restcountries.com/v3.1/name/{name}





const getCountry = () =>{
 let inputValue = searchInput.value

fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        console.log(data[0].capital);
        console.log(data[0].flags);
        console.log(data[0].population);
        console.log(data[1].continents);
    })



    // let countryDetails = `
    //     <figcaption>
    //         <h3 id="country-name">Germany</h3>
    //         <p>Population: <span id="population">81,770,900</span> </p>
    //         <p>Region: <span>Europe</span> </p>
    //         <p>Capital: <span>Berlin</span></p>
    //     </figcaption>
    // `


}



searchBtn.onclick = () => getCountry()

// searchBtn.addEventListener('click', getCountry);


