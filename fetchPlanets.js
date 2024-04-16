async function fetchPlanets() {
    const response = await fetch('https://swapi.dev/api/planets/');
    const data = await response.json();
    return data.results;
}

async function updatePlanetTable() {
    const planets = await fetchPlanets(); 

    const newTable = document.createElement('table');
    newTable.classList.add('table'); 

    const headerRow = newTable.insertRow();
    const headers = ['Name', 'Climate', 'Diameter', 'Gravity', 'Orbital Period', 'Population', 'Rotation Period', 'Terrain', 'Surface Water'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    planets.forEach(planet => {
        const row = newTable.insertRow();

        row.insertCell().textContent = planet.name;
        row.insertCell().textContent = planet.climate;
        row.insertCell().textContent = planet.diameter;
        row.insertCell().textContent = planet.gravity;
        row.insertCell().textContent = planet.orbital_period;
        row.insertCell().textContent = planet.population;
        row.insertCell().textContent = planet.rotation_period;
        row.insertCell().textContent = planet.terrain;
        row.insertCell().textContent = planet.surface_water;
    });

    const container = document.createElement('div');
    container.classList.add('table-container');
    container.appendChild(newTable);

    const apiPlanetTableContainer = document.getElementById('apiPlanetTableContainer');

    apiPlanetTableContainer.appendChild(container);
}

window.addEventListener('load', updatePlanetTable);

document.getElementById("searchButton").addEventListener("click", function() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var rows = document.querySelectorAll("#apiPlanetTableContainer table tbody tr");

    var highlightedRow = document.querySelector("#apiPlanetTableContainer table tbody tr.highlighted");
    if (highlightedRow) {
        highlightedRow.classList.remove("highlighted");
    }

    for (var i = 0; i < rows.length; i++) {
        var rowText = rows[i].textContent.toLowerCase();
        if (rowText.includes(input)) {
            rows[i].classList.add("highlighted");
            rows[i].scrollIntoView();
            break;
        }
    }
});

   
