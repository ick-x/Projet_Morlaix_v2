let compteur = false;

document.querySelector(":root").style.setProperty("--additional-padding", 200);
var padd = $(".corps").css("padding-left");

$("#logoTroisBarres").click(function () {
    if (!compteur) {
        $(".bouttonsColonne").css("display", "block");
        $(".corps").css("padding-left","additional-padding");
    }
    else {
        $(".bouttonsColonne").css("display", "none");
        $(".corps").css("padding-left", padd);
    }
    compteur = !compteur;
});