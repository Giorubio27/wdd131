document.getElementById("last_modified").innerHTML = document.lastModified;
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
const navigation = document.querySelector('.nav')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {
    navigation.classList.toggle('showtime');
    hambutton.classList.toggle('showtime');
});


const teams = [
    {
        id: "sas",
        name: "Spurs"
    },
    {
        id: "houston",
        name: "Rockets"
       
    },
    {
        id: "nyk",
        name: "Knicks"
        
    },
    {
        id: "boston",
        name: "Celtics"
        
    },
    {
        id: "indy",
        name: "Pacers"
        
    }
];


teamDropDown = function teamDropDown() {
    const teamSelect = document.getElementById("team-select");
    console.log('teamSelect element:', teamSelect);

    teams.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;

        teamSelect.appendChild(option);

    });
}
document.addEventListener('DOMContentLoaded', teamDropDown);
const
    visitDisplay = document.querySelector(".visit");

let numVisits = Number(window.localStorage.getItem("numVisits - ls")) || 0;



numVisits++;

if (numVisits !== 0) {
    visitDisplay.textContent = `Number of Visits:  ${numVisits}`;
} else {
    visitDisplay.textContent = `Welcome to our site!`;
}

window.localStorage.setItem("numVisits - ls", numVisits);



const networks = [
    {
        id: "espn",
        name: "ESPN"
    },
    {
        id: "abc",
        name: "ABC"

    },
    {
        id: "fox",
        name: "FOX Sports"

    },
    {
        id: "tnt",
        name: "TNT"

    },
    {
        id: "nba",
        name: "NBA League Pass"

    }
];


networkDropDown = function networkDropDown() {
    const networkSelect = document.getElementById("network-select");
    console.log('networkSelect element:', networkSelect);

    networks.forEach(network => {
        const option = document.createElement("option");
        option.value = network.id;
        option.textContent = network.name;

        networkSelect.appendChild(option);

    });
}
document.addEventListener('DOMContentLoaded', networkDropDown);


const seasons = [
    {
        id: "preseason",
        name: "Preseason"
    },

    {
        id: "reg",
        name: "Regular Season"
    },
    {
        id: "post",
        name: "Post-Season"
    }
];

seasonDropDown = function seasonDropDown() {
    const seasonSelect = document.getElementById("season-select");
    console.log('seasonSelect element:', seasonSelect);

    seasons.forEach(season => {
        const option = document.createElement("option");
        option.value = season.id;
        option.textContent = season.name;

        seasonSelect.appendChild(option)
    });
}
document.addEventListener('DOMContentLoaded', seasonDropDown);


