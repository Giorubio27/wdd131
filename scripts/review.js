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
