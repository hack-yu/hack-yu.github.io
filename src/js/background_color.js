const colors = ["#ef5777","#575fcf","#4bcffa","#34e7e4","#0be881","#f53b57","#3c40c6","#0fbcf9","#00d8d6","#05c46b","#ffc048","#ffdd59","#ff5e57","#d2dae2","#485460","#ffa801","#ffd32a","#ff3f34"];

function random_backgound_color() {
    let color = Math.floor(Math.random() * colors.length);
    let color2 = Math.floor(Math.random() * colors.length);
    document.querySelector("body").style.background =
      "-webkit-linear-gradient(right," + colors[color] +", " +colors[color2] +")";
}
setInterval(random_backgound_color, 2000);