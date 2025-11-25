/** MINITASK 1 */
const input = document.querySelector("form");
const output = document.querySelectorAll(".output>td");
input.addEventListener("submit", (e) => {
  e.preventDefault();
  //   const suhu = e.target.suhu.value;
  output[0].innerHTML = e.target.suhu.value;
  output[1].innerHTML = (e.target.suhu.value * 9) / 5 + 32;
  output[2].innerHTML = parseInt(e.target.suhu.value) + 273.15;
  output[3].innerHTML = (e.target.suhu.value * 4) / 5;
});
// ============= minitaks 2 ==================//
let lamp = document.querySelectorAll(".traffic-light>div");


function cycle() {
  lamp[0].style.backgroundColor = "red";
  lamp[1].style.backgroundColor = "grey";
  lamp[2].style.backgroundColor = "grey";

  setTimeout(() => {
    lamp[0].style.backgroundColor = "grey";
    lamp[1].style.backgroundColor = "yellow";
    lamp[2].style.backgroundColor = "grey";
  }, 3000);

  setTimeout(() => {
    lamp[0].style.backgroundColor = "grey";
    lamp[1].style.backgroundColor = "grey";
    lamp[2].style.backgroundColor = "green";
  }, 3000 + 2000);
}

(()=>{
  cycle()
  setInterval(cycle, 8e3); 
})();
