const h1= document.querySelector('h1');
const btn =document.getElementById("btn");

alert('Hello!2048!');

const pics_src = ["91AHzLttKyL._CR206,10,1575,1400_SX1440_.jpg","R.jpg","asd.png"];
let num = -1;
const pics_orz =["a.jpg","b.jpg","C.jpg","D.JPG","W.jpg"];
let nob = -1;

let slideshowInterval;
let slideshowInterval2;

console.log(h1)

function start() {
  slideshowInterval = setInterval(slideshow_timer, 1000);
  slideshowInterval2 = setInterval(slideshow_timer_orz, 1000);
  btn.style.display="none";
  changeDecoding();
}

function stop(){
  clearInterval(slideshowInterval);
  clearInterval(slideshowInterval2);
}
 
function slideshow_timer(){ 
  if (num == 2){
      num = 0;
  } 
  else {
      num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
}

function slideshow_timer_orz(){
  nob = Math.floor(Math.random() * 5) + 1;
  document.getElementById("2pic").src = pics_orz[nob - 1];
}

function changeDecoding(){
  alert('クリックされました！');
  var images = document.getElementsByTagName("img");
  for(var i = 0; i < images.length; i++) {
    images[i].setAttribute("decoding","async");
  }
}

h1class="col-sm-10"
p1class="col-sm-5"
p2class="col-sm-5"