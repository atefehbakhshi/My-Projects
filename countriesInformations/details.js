const container = document.getElementById("container");
const countryId = location.search.split("ccn=")[1];
async function result(ccn) {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${ccn}`
    );
    const [searchcountrie] = await res.json();
    const neighbours = searchcountrie.borders;
    let borders = "";
    if (neighbours !== undefined) {
      neighbours.forEach((item) => {
        borders += ` <span class="neighbours"> ${item}- </span>`;
      });
    } else {
      borders = " - ";
    }
    const html = `
          <img src="${searchcountrie.flags.png}" alt="ContryFlag">
          <div class="information">
              <p><span>Name:</span>${searchcountrie.name.official} </p>
              <p><span>Common Name:</span>${searchcountrie.name.common} </p>
              <p><span>Capital:</span>${searchcountrie.capital[0]} </p>
              <p><span>Region:</span>${searchcountrie.region}</p>
              <p><span>Continents:</span>${searchcountrie.continents[0]}</p>
              <p><span>Population:</span> ${(
                +searchcountrie.population / 1000000
              ).toFixed(2)} M </p>
              <p><span>Language:</span> ${
                searchcountrie.languages[
                  Object.keys(searchcountrie.languages)[0]
                ]
              }</p>
             <p><span>Neighbours:</span> ${borders}  </p> 
          </div>`;
    container.insertAdjacentHTML("beforeend", html);
  } catch (e) {
    console.log(e);
  }
}
result(countryId);
