let compteur = false;

let padLeftBase = "15%";
let padAdded = "200px";

document.querySelector(":root").style.setProperty("--additional-padding", 200);
var padd = $(".corps").css("padding-left");

$("#logoTroisBarres").click(function () {
    if (!compteur) {
        $(".bouttonsColonne").css("display", "block");
        $(".corps").css("padding-left", `calc(${padLeftBase} + ${padAdded})`);
    }
    else {
        $(".bouttonsColonne").css("display", "none");
        $(".corps").css("padding-left", `calc(${padLeftBase})`);
    }
    compteur = !compteur;
});