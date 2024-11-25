const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";

const dropdowns = document.querySelectorAll(".dropdown select");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "into" && currCode === "NPR") {
      newOption.selected === "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFag(evt.target);
  });
}

const updateFag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentEement.querySelector("img");
  img.src = newSrc;
};
