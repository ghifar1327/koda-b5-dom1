const input = document.querySelector("form");
const output = document.querySelectorAll(".output>div");
input.addEventListener("submit", (e) => {
  e.preventDefault();
  //   const suhu = e.target.suhu.value;
  output[0].textContent = `celcius = ${e.target.suhu.value}`;
  output[1].textContent = `fahrenheit = ${(e.target.suhu.value * 9) / 5 + 32}`;
  output[2].textContent = `kelvin = ${parseInt(e.target.suhu.value) + 273.15}`;
  output[3].textContent = `reamur = ${(e.target.suhu.value * 4) / 5}`;
});
