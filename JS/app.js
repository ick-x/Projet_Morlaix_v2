$(document).ready(
    function(){
        $.ajax({
            type: "GET",
            url:"https://api.openweathermap.org/data/2.5/weather?lat=48.57&lon=-3.82&appid=9f02f8058f6f771fdddfc1dcea219e1a&units=metric",
            dataType:"json",
            success: function(retour){
                $("#temp").text(retour.main.temp + "°C");
                $("#logoMeteo").attr("src","http://openweathermap.org/img/wn/"+retour.weather[0].icon+"@2x.png");
            },
            error: function(retour){
                $("#cadreMeteo").text("erreur lors du chargement");
            }
        });
    }
) 