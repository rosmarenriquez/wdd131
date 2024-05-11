const temperature = 24;
const windSpeed = 10;
const windChillElement = document.querySelector('#windchill')

function calculateWindChill(temp, wind) {
    return Math.round(13.12 + (0.6215 *temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16)))
}

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed)
    windChillElement.textContent = `${windChill} °C`;
} else{
    windChillElement.textContent = "N/A";
}