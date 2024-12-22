// jh\falsesf
// SVGDefsElementg
// satisfiessfg
// fgg
// WebGLBufferfg
// gf

// jh\falsesf
// SVGDefsElementg
// dahhi
// fgg
// WebGLBufferfg
// gf

// function market(a) {
//   console.log("market gya");
//   console.log(a + " lani hai");
//   var b = "klks";
//   return b;
// }

// console.log(market("dahi"));

// for (i = 0; i < 10; i++) {
//   var a = Math.random() * 5 + 1;
//   var b = Math.floor(a);
//   console.log(b);
// }

// alert("Hellow Java script");

// function change(a) {
//   document.getElementById("gabbar").innerHTML = a + " ka jmana hai";
// }

// document.getElementsByTagName("h1")[1].innerHTML = "32342364728282";

// document.querySelector("h1")[1].innerHTML = "122123";

function adice() {
  var a = Math.random() * 6 + 1;
  var b = Math.floor(a);
  document.getElementsByClassName("two")[0].innerHTML = b;
  let str1 = "dice" + b + ".png";
  document.getElementById("img2").src = str1;

  var c = Math.random() * 5 + 1;
  var d = Math.floor(c);
  document.getElementsByClassName("one")[0].innerHTML = d;
  let str2 = "dice" + d + ".png";
  document.getElementById("img1").src = str2;

  if (d > b) {
    document.getElementById("Winner").innerHTML = "Player 1 wins";
  } else if (b > d) {
    document.getElementById("Winner").innerHTML = "Player 2 wins";
  } else {
    document.getElementById("Winner").innerHTML = "Roll Again ! ! ";
  }
}
