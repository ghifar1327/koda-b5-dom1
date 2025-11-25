const input = document.querySelector("form");
const output = document.querySelectorAll(".output>td");
input.addEventListener("submit", (e) => {
  e.preventDefault();
  //   const suhu = e.target.suhu.value;
  output[0].innerHTML = e.target.suhu.value
  output[1].innerHTML = (e.target.suhu.value * 9) / 5 + 32
  output[2].innerHTML = parseInt(e.target.suhu.value) + 273.15
  output[3].innerHTML = (e.target.suhu.value * 4) / 5
});
