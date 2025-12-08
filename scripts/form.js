const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

populateDropDown = function populateDropDown() {
    const productSelect = document.getElementById("product-select");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;

        productSelect.appendChild(option);
        
    });
}
document.addEventListener('DOMContentLoaded', populateDropDown);
const
    visitDisplay = document.querySelector(".visits");
    
let numVisits = Number(window.localStorage.getItem("numVisits - ls")) || 0;



numVisits++;

if (numVisits !== 0) {
    visitDisplay.textContent = numVisits;
}
else {
    visitDisplay.textContent = `Welcome to our site!`;
}

window.localStorage.setItem("numVisits - ls", numVisits);




document.getElementById("last_modified").innerHTML = document.lastModified;
document.getElementById("currentyear").innerHTML = new Date().getFullYear();