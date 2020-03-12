

let requestURL2 = "reviews.json";
let request2 = new XMLHttpRequest();
request2.open('GET', requestURL2);
request2.responseType = 'json';
request2.send();

request2.onload = function() {
  const response = request2.response;
  const reviews = response['reviews'];
  createABlurb(reviews,0);
  createABlurb(reviews,1);
  createABlurb(reviews,2);
  createABlurb(reviews,3);
  createABlurb(reviews,4);
  document.getElementById("cover").style.height = "0%";
}



function createABlurb(reviews,id)
{
let blurb = document.createElement('div');
blurb.className = "blurbSmall";
let a = document.createElement('a');
a.href = reviews[id]["url"];
//let img = document.create('img');
let img = document.createElement('img');
if (reviews[id]["rating"]=="dig")
{
  img.src = "dig.png";
  img.className = "dig";
}
else
{
  img.src = "bury.png";
  img.className = "bury";
}
let h1 = document.createElement('h1');
let txtFld = document.createElement('div');
txtFld.className = "txtField";
let p = document.createElement('p');



p.innerHTML = reviews[id]["blurb"];
h1.innerHTML = reviews[id]["title"];
txtFld.appendChild(p);
a.appendChild(img);
a.appendChild(h1);
a.appendChild(txtFld);


blurb.appendChild(a);

document.getElementById("blrbContainer").appendChild(blurb);
}
