document.write('\
<div id="cover" class="cover">\
</div>\
<div id="banner" class="bannerImgContainer" >\
<a href="digbury.html">\
<img src="scrngle.jpg" class="bannerImg" alt="scrngle">\
</a>\
</div>\
<div id="header" class="navBar">\
<span class="navbutton" onclick="openNav()">&#9776;</span>\
</div>\
<div id="myNav" class="overlay">\
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>\
  <div class="overlay-content">\
    <a href="digbury.html">Home</a>\
    <a href="musics.html">Musics</a>\
    <a href="movies.html">Film</a>\
    <a href="games.html">Games</a>\
    <a href="products.html">Products</a>\
    <a href="ideas.html">Ideas</a>\
  </div>\
</div>\
');


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
