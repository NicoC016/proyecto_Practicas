// function counter() {
//   let countdown = 5;

//   let timerDiv = document.getElementById("timer");

//   let timer = setInterval(function () {
//     timerDiv.innerHTML = `Volviendo al inicio en  ${countdown}`;
//     countdown--;
//     if (countdown === 0) {
//       clearInterval(timer);
//       window.location.href = "./"
//     }
//   }, 1000);
// }

function multiplicar(){
 
  const r1 = document.getElementById(1)
  const r2 = document.getElementById(2)

  const resultado = r1.parseInt * r2.parseInt
  return resultado
}