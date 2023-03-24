const apiKey = '5014a7273368acfcfe287b9ee3dd1ac8';
const apiEndpoint = 'https://api.openweathermap.org/data/2.5/weather';

const cityInput = document.getElementById("city");
const submitBtn = document.getElementById("submit");
const locationElement = document.getElementById("location");
const descElement = document.querySelector(".desc");
const tempElement = document.querySelector(".temp");

submitBtn.addEventListener("click", function() {
  const city = cityInput.value.trim();
  const url = `${apiEndpoint}?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(response => {
      if (response.cod === "404") {
        throw new Error(response.message);
      }

      const location = `${response.name}, ${response.sys.country}`;
      const desc = response.weather[0].description;
      const temp = `${response.main.temp.toFixed(1)} &deg;C`;

      locationElement.textContent = location;
      descElement.textContent = desc;
      tempElement.innerHTML = temp;
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });
});
