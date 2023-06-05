"use strict";
function __ghs(tag) {
  return document.querySelector(tag);
}
function __intrue__() {
  var color = [
    "#0dffe1",
    "#0070eb",
    "#7700eb",
    "#eb0098",
    "#c100c7",
    "#c7003c",
    "#700022",
    "#f40000",
    "#40ff22",
    "#0e6800",
    "#bfff81",
    "#fffa06",
    "#d25b00",
    "#7c3500",
    "#ffffff",
  ];

  var txt = [
    "Web Developer",
    "Freelancer",
    "Blogger",
    "Content Creator",
    "YouTuber",
    "PHP Programmer",
    "Programmer",
    "SEO Expert",
    "Back-End",
    "Developer",
    "Full-Stack",
    "Developer",
  ];
  function type(string) {
    __ghs(".intrue").textContent = string;
  }
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * txt.length);
    type(txt[randomIndex]);
  }, 1500);

  __ghs(".intrue").textContent = "Web Developer";
  setTimeout(() => {
    __ghs(".img").innerHTML = `
        <img src="images/logo.png" />
    `;
  }, 3000);
  setTimeout(() => {
    __ghs("#name_area").innerHTML = `<h2 id="name">Ghs Julian</h2>`;
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * color.length);
      __ghs("#name_area h2").style.color = color[randomIndex];
      //  __ghs(".img img").style.borderColor = color[randomIndex];
      // console.log();
    }, 500);
  }, 6000);
  setTimeout(() => {
    __ghs("#social_area").innerHTML = `
          <div class="social">
        <a href="https://web.facebook.com"><i class="bi bi-facebook"></i></a>
        <a href="https://twitter.com/ghsjulian"><i class="bi bi-twitter"></i></a>
        <a href="https://google.com/ghsjulian"><i class="bi bi-google"></i></a>
        <a href="https://github.com/Ghsjulian"><i class="bi bi-github"></i></a>
        <a href="https://youtube.com/ghsjulian"><i class="bi bi-youtube"></i></a>
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
//const randomIndex = Math.floor(Math.random() * color.length);
//
