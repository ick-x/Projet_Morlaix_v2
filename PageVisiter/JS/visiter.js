var DatArticles;

var liste;
var titre;
var previous;
var article;
var next;
var old=0;
var idArticle = 0;

$(document).ready(init);
function init() {
    DatArticles = $(".datArt");
    article = $("#article");
    previous = $("#previous");
    next = $("#next");
    titre = $(".titre");

    next.on("click", net);
    previous.on("click", prev);

    initListe();
    majArticles();

    if(DatArticles.length<=6){
        document.getElementById("listeTitre").style.overflowY="hidden";
    }
}
function net() {
    old=idArticle;
    if (idArticle < DatArticles.length - 1) {
        ++idArticle;
        majArticles();
    }
}
function prev() {
    old=idArticle;
    if (idArticle > 0) {
        --idArticle;
        majArticles();
    }
}
function majArticles() {
    titre[0].innerHTML = "";
    article.html("");
    titre[1].innerHTML = "";
    if (idArticle >= 1) {
        titre[0].innerHTML = $(".titres")[idArticle - 1].innerHTML;

    }
    loadArticle($(".titres")[idArticle].innerHTML, $(".datArt>p")[idArticle].innerHTML,$(".datArt")[idArticle].getAttribute("lien"));
    if (idArticle < DatArticles.length - 1) {
        titre[1].innerHTML = $(".titres")[idArticle + 1].innerHTML;
    }

    var c = document.getElementsByClassName("listetitre");
    var b = document.getElementsByClassName("petitRond");
    b[old].style.width='12px';
    b[old].style.height='12px';
    b[old].style.backgroundSize ="12px 12px";
    b[idArticle].style.width='20px';
    b[idArticle].style.height='20px';
    b[idArticle].style.backgroundSize ="20px 20px";
    c[old].style.backgroundColor = 'lightGray';
    c[old].style.color = 'black';
    c[idArticle].style.backgroundColor = 'Gray';
    c[idArticle].style.color = 'white';  

}
function initListe() {
    var i = 0;
    var s = "";
    var s2 = "";
    for (; i < DatArticles.length; ++i) {
        var str = $("h1")[i].innerHTML;
        s += newLi(i, str);
        s2 += "<div class='petitRond' test='" + i + "'></div>";
    }
    $("#listeTitre").html(s);
    $("#ronds").html(s2);
    var c = document.getElementsByClassName("listetitre");
    var b = $(".petitRond");
    var i = 0;
    for(;i<c.length;++i){
        c[i].addEventListener("click",clickListe);
        b[i].addEventListener("click",clickListe);
    }
}
function newLi(i, str) {
    var s = '<li test="' + i + '" class="listetitre"  >' + str + "</li>";
    return s;
}
function loadArticle(str1, str2, str3) {
    console.log(str3)
    var str = "<h1>" + str1 + "</h1><p>" + str2 + "</p>" +
     "<a href='"+str3+"'><div id='suite'>Lire la Suite</div></a>" ;
    article.html(str);
}


function clickListe(){
    old=idArticle;
    var  temp = $(this).attr("test");
    idArticle = parseInt(temp);
    console.log(idArticle+"C'est la lalalalal l");
    majArticles();
}