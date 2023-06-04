"use strict";
function __ghs(tag) {
  return document.querySelector(tag);
}
function __intrue__() {
  __ghs(".intrue").textContent = "Web Developer";
  setTimeout(() => {
    __ghs(".img").innerHTML = `
        <img src="images/logo_2.png" />
    `;
  }, 3000);
  setTimeout(() => {
    __ghs("#name_area").innerHTML = `<h2 id="name">Ghs Julian</h2>`;
  }, 6000);
  setTimeout(() => {
    __ghs("#social_area").innerHTML = `
          <div class="social">
        <a href="#"><i class="bi bi-facebook"></i></a>
        <a href="#"><i class="bi bi-twitter"></i></a>
        <a href="#"><i class="bi bi-google"></i></a>
        <a href="#"><i class="bi bi-github"></i></a>
        <a href="#"><i class="bi bi-youtube"></i></a>
      </div>
    
    `;
  }, 7000);
  setTimeout(() => {
    __Type__(`
    Hello ! There I'm Julie. I'm A Web Developer & Designer . Freelancer , Blogger , YouTuber And SEO Expert Programmer .
    `);
  }, 10000);
}
__intrue__();

function __Type__(txt) {
  //var txt = "Have A Good Morning dude I was busy ";
  var speed = 40;
  var i = 0;
  function typeWriter() {
    if (i < txt.length) {
      __ghs("#type_text").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
}



//Math.floor(Math.random() * (max - min) ) + min;