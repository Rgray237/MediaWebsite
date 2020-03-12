createABlurb(0);

function createABlurb(id)
{
  let requestURL = "reviews.json";
  let request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function() {
    const reviews = request.response;
    writeToBlurb(jsonObj,id);
  }
let blurb = document.createElement('div');
blurb.className = "blurbSmall";
let a = document.createElement('a');
a.href = "nierautomata.html";
//let img = document.create('img');
let h1 = document.createElement('h1');
h1.innerHTML="fuuuu";
let txtFld = document.createElement('div');
txtFld.className = "txtField";
let p = document.createElement('p');
p.innerHTML="bruuuuuu";
txtFld.appendChild(p);
a.appendChild(h1);
a.appendChild(txtFld);


blurb.appendChild(a);
document.getElementById("blrbContainer").appendChild(blurb);
}
/*
<div class="blurbSmall">
  <a id="blrb1url">
    <img src="dig.png" class="dig"></img>
    <h1 id="blrb1title">f</h1>
    <div class="txtField">
      <p id="blrb1"> </p>
    </div>
  </a>
</div>
*/
function writeToBlurb(jsonObj,id)
{

}
