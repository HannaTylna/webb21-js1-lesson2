const currentWeather = "rainy";
/*
switch(currentWeather) {
    case "rainy": 
        console.log("Det kommer regna!");
        break
    case "sunny":
        console.log("Det verkar vara soligt!");
        break
    case "cloudy":
        console.log("Molnigt idag!");
        break
    case "snowing":
        console.log ("Det snoar");
        break
    default:
        console.log("Ingen aning!");
        break
}
*/

if(currentWeather === "rainy") {
    console.log("Det kommer regna!");
} else if(currentWeather === "sunny") {
    console.log("Det verkar vara soligt!");
} else if(currentWeather === "cloudy"){
    console.log("Molnigt idag!");
} else if (currentWeather === "snoar"){
    console.log ("Det snoar");
}else{
    console.log("Ingen aning!");
}