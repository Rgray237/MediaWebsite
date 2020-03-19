

function loadJSON(callback)
{
  let rvwRqstURL = "reviews.json";
  let rvwRqst = new XMLHttpRequest();
  rvwRqst.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    callback();
    }
  };
  rvwRqst.open('GET', rvwRqstURL,true);
  rvwRqst.responseType = 'json';
  rvwRqst.send();
  return rvwRqst;
}

function loadJSON(callback,id)
{
  let rvwRqstURL = "reviews.json";
  let rvwRqst = new XMLHttpRequest();
  rvwRqst.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = rvwRqst.response;

    callback(response['reviews'],id);
    }
  };
  rvwRqst.open('GET', rvwRqstURL,true);
  rvwRqst.responseType = 'json';
  rvwRqst.send();
  return rvwRqst;
}

function loadArticle(id)
{
  var rvwRqst = loadJSON(createArticle,id);

}


function getIntroBlurb(jsonObj)
{
  document.getElementById("mainBlurb").innerHTML = jsonObj.response['intro'];
}

function hideCover()
{
  document.getElementById("cover").style.height = "0%";
}

function createAllBlurbsOfType(reviews,type)
{
  for (var i = 0; i < reviews.length; i++) {
    if (reviews[i]["category"] == type)
    {
      createABlurb(reviews,i);
    }
  }
}


function getIndexOfReviewFromID(reviews,id)
{

  for(var i = 0; i< reviews.length; i++)
  {
    if (reviews[i]["articleId"] == id)
    {
      return i;
    }
  }
}

function createArticle(reviews,id)
{
  var index = getIndexOfReviewFromID(reviews,id);
  let div = document.createElement('div');
  div.className = "article";
  let img = document.createElement('img');
  if (reviews[index]["rating"]=="dig")
  {
    img.src = "dig.png";
    img.className = "articleDigBuryImg";
  }
  else
  {
    img.src = "bury.png";
    img.className = "articleDigBuryImg";
  }
  div.appendChild(img);
  let title = document.createElement('div');
  title.className = "articleTitle";
  title.innerHTML = reviews[index]["title"];
  let sub = document.createElement('div');
  sub.className = "articleSub";
  sub.innerHTML = reviews[index]["blurb"];
  div.appendChild(title);
  div.appendChild(sub);

  let bdy = document.createElement('div');
  bdy.className = "articleBody";

  var x = document.getElementsByClassName("page");

  var numPars = reviews[index]["numParagraphs"];
  for(i=1;i<=numPars;i++)
  {
    let newp = document.createElement('div');
    newp.className = "articleParagraph";
    newp.innerHTML = reviews[index]["p"+i];
    bdy.appendChild(newp);
  }
  div.appendChild(bdy);
  x[0].appendChild(div);

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
txtFld.className = "blurbTxt";
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
