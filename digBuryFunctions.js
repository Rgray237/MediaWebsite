let rvwRqstURL = "reviews.json";
let rvwRqst = new XMLHttpRequest();
rvwRqst.open('GET', rvwRqstURL);
rvwRqst.responseType = 'json';
rvwRqst.send();

function CreateNBlurbsOnLoad(N)
{
    const response = rvwRqst.response;
    const reviews = response['reviews'];
    createABlurb(reviews,0);
    createABlurb(reviews,1);
    createABlurb(reviews,2);
    createABlurb(reviews,3);
    createABlurb(reviews,4);

}

function getIntroBlurb(jsonObj)
{
  document.getElementById("mainBlurb").innerHTML = jsonObj.response['intro'];
}

function hideCover()
{
  document.getElementById("cover").style.height = "0%";
}

function createABlurb(reviews,id)
{
let blurb = document.createElement('div');
blurb.className = "blurbSmall";
let aClickable = document.createElement('div');
let a = document.createElement('a');
a.href = reviews[id]["url"];
//let img = document.create('img');
let img = document.createElement('img');
let cat = document.createElement('h2');
cat.className = "blurbCategory";
cat.innerHTML = reviews[id]["category"];
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
let blurbImg = document.createElement('img');
blurbImg.className = "blurbImg";

blurbImg.src = "Assets/"+ reviews[id]["blurbImg"];


p.innerHTML = reviews[id]["blurb"];
h1.innerHTML = reviews[id]["title"];
txtFld.appendChild(p);
aClickable.appendChild(img);
aClickable.appendChild(h1);

aClickable.appendChild(blurbImg);
aClickable.appendChild(txtFld);
aClickable.appendChild(cat);
a.appendChild(aClickable);
blurb.appendChild(img);
blurb.appendChild(a);

document.getElementById("blrbContainer").appendChild(blurb);
}
