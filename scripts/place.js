document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("last_modified").innerHTML = document.lastModified;



function calculateWindChill(airTemp, windSpeedMph) {
    const validTemp = airTemp <= 50;
    const validWind = windSpeedMph > 3;

    if (validTemp && validWind) {
        const part1 = 35.74
        const part2 = 0.6215 * airTemp
        const part3 = 35.75 * Math.pow(windSpeedMph, 0.16)
        const part4 = (0.4275 * airTemp) * Math.pow(windSpeedMph, 0.16)

        calculateWindChill = part1 + part2 - part3 + part4


        return Math.round(calculateWindChill * 100) / 100;
    } else if (validTemp > 50) {
        return airTemp;
    }
    else {
        return airTemp;
    }
}

const temp1 = 47;
const wind1 = 5;
const windchill1 = Math.round(calculateWindChill(temp1, wind1));
console.log(`Windchill: ${windchill1}°F`);

document.getElementById("windy").innerHTML = `Windchill: ${windchill1}°F`;