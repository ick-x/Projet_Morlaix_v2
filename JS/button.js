let compteur = false;
$("#logoTroisBarres").click(function () {
    if (!compteur) {
        $("#bouttonsColonne").css("display", "block");
        $(".corps").css("margin-left", "200px");
    }
    else {
        $("#bouttonsColonne").css("display", "none");
        $(".corps").css("margin-left", "0");
    }
    compteur = !compteur;
});