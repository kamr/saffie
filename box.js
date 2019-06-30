var cube;

document.addEventListener('DOMContentLoaded', (event) => {
  setupCube();
})

function setupCube() {
  cube = document.getElementById('D3Cube')
  console.log(cube)
  cube.addEventListener('click',function() {
    console.log("clicked the cube")
    // var c = document.getElementsByClassName('circle');
    // for (var i = 0; i < c.length; i++) {
    // 	c[i].classList.add('animate');
    // }
    // cube.classList.add('openBox');
    cube.addEventListener('animationiteration', stopSpinning, false);
  })
}

function stopSpinning() {
  console.log("open the box")
  cube.classList.remove('spinBox');
  cube.classList.add('openBox');
  document.getElementById('side1').classList.add('openTop');
  document.getElementById('side2').classList.add('openSide2');
  document.getElementById('side3').classList.add('openSide3');
  document.getElementById('side4').classList.add('openSide4');
  document.getElementById('side5').classList.add('openSide5');
  // side1.classList.add('openSide');
}

// <div id="side1" class="openTop"></div>
// <div id="side2" class="openSide2"></div>
// <div id="side3" class="openSide3"></div>
// <div id="side4" class="openSide4"></div>
// <div id="side5" class="openSide5"></div>

// $("#button").click(function() {
//   $('.transform').toggleClass('transform-active');
// });

// var cubex = -22,    // initial rotation
// cubey = -38,
// cubez = 0;
// function rotate(variableName, degrees) {
//     window[variableName] = window[variableName] + degrees;
//     rotCube(cubex, cubey, cubez);
// }
// function rotCube(degx, degy, degz){
//     segs = "rotateX("+degx+"deg) rotateY("+degy+"deg) rotateZ("+degz+"deg) translateX(0) translateY(0) translateZ(0)";
//     $('#D3Cube').css({"transform":segs});
// }
// function turnRight() {
//     rotate("cubey", 90);
// }
// function turnLeft() {
//     rotate("cubey", -90);
// }
// function flipCube() {
//     rotate("cubez", -180);
// }
//
//
// window["cubez"] = window["cubez"] + 90;
// segs = "rotateX("+degx+"deg) rotateY("+degy+"deg) rotateZ("+degz+"deg) translateX(0) translateY(0) translateZ(0)";
// $('#D3Cube').css({"transform":segs});
