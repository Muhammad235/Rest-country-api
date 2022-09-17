

const searchInput = document.getElementById('country-name')
const searchBtn = document.getElementById('search-btn')


// fetching country data from https://restcountries.com/v3.1/name/{name}





const getCountry = () =>{
 let inputValue = searchInput.value

fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
    .then(response => response.json())
    .then(data => console.log(data))
}



searchBtn.onclick = () => getCountry()

// searchBtn.addEventListener('click', getCountry);


