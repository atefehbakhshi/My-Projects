'use strict'
const counntries = document.getElementById("countries");
const search = document.getElementById("search-box");
const loadData = async (country) => {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const searchcountrie = await res.json();
    counntries.innerHTML = "";
    searchcountrie.forEach((item) => {
      const html = `
              <div class="country" id="${item.ccn3}">
              <img src="${item.flags.png}" alt="" class="image">
              <p>${item.name.official} </p>
              </div>
              `;
      counntries.insertAdjacentHTML("beforeend", html);
    });
  } catch (e) {
    console.log(e);
  }
};

search.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    loadData(e.target.value);
  }
});

async function loadConunties() {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const countryInformation = await res.json();
    countryInformation.forEach((item) => {
      const html = `
        <div class="country" id="${item.ccn3}">
        <img src="${item.flags.png}" alt="" class="image">
        <p>${item.name.official} </p>
        </div>
        `;
      counntries.insertAdjacentHTML("beforeend", html);
    });
  } catch (e) {
    console.log(e);
  }
}
loadConunties();

counntries.addEventListener("click", (e)=>{
const ccn = e.target.closest("div").id;
window.location.href = "details.html?ccn="+ccn;
})
