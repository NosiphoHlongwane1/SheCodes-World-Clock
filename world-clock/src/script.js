function updateTime() {
  let johannesburgElement = document.querySelector("#Johannesburg");
  if (johannesburgElement) {
      let johannesburgDateElement = johannesburgElement.querySelector(".date");
      let johannesburgTimeElement = johannesburgElement.querySelector(".time");
      let johannesburgTime = moment().tz("Africa/Johannesburg");

      johannesburgDateElement.innerHTML = johannesburgTime.format("MMM Do YYYY");
      johannesburgTimeElement.innerHTML = johannesburgTime.format(
          "h:mm:ss [<small>]A[</small>]"
      );
  }

  let mbabaneElement = document.querySelector("#Mbabane");
  if (mbabaneElement) {
      let mbabaneDateElement = mbabaneElement.querySelector(".date");
      let mbabaneTimeElement = mbabaneElement.querySelector(".time");
      let mbabaneTime = moment().tz("Africa/Mbabane");

      mbabaneDateElement.innerHTML = mbabaneTime.format("MMM Do YYYY");
      mbabaneTimeElement.innerHTML = mbabaneTime.format(
          "h:mm:ss [<small>]A[</small>]"
      );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  
  citiesElement.innerHTML = `<div class="city">
      <div> 
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
    </div>
    <a href="index.html" class="home"> Back to home</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
if (citiesSelectElement) {
  citiesSelectElement.addEventListener("change", updateCity);
}
