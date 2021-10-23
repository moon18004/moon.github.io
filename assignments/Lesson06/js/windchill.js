const t = parseInt(document.querySelector('#temp').innerHTML);
const s = parseInt(document.querySelector('#wind_speed').innerHTML);

// Validate temp and windspeed and calculate windchill if valid.
if (t <= 50 && s >= 3) {
  const w =
    35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
  document.querySelector('#wind_chill').innerHTML = w.toFixed(0);
} else {
  document.querySelector('#wind_chill').innerHTML = 'NaN';
}