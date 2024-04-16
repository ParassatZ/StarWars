// Функция для загрузки данных о персонажах с API
async function fetchCharacters() {
    const response = await fetch('https://swapi.dev/api/people/');
    const data = await response.json();
    return data.results; // Возвращаем только массив результатов
}

// Функция для обновления таблицы персонажей
async function updateCharacterTable() {
    const characters = await fetchCharacters(); // Получаем данные о персонажах

    // Создаем новую таблицу для отображения данных о персонажах из API
    const newTable = document.createElement('table');
    newTable.classList.add('table'); // Добавляем класс для стилизации, как у существующей таблицы

    // Создаем заголовок для новой таблицы
    const headerRow = newTable.insertRow();
    const headers = ['Name', 'Height', 'Mass', 'Hair Color', 'Skin Color', 'Eye Color', 'Birth Year', 'Gender'];

    // Добавляем заголовки столбцов к новой таблице
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    // Добавляем каждого персонажа в новую таблицу
    characters.forEach(character => {
        const row = newTable.insertRow(); // Вставляем новую строку в таблицу

        // Добавляем ячейки с данными о персонаже
        row.insertCell().textContent = character.name;
        row.insertCell().textContent = character.height;
        row.insertCell().textContent = character.mass;
        row.insertCell().textContent = character.hair_color;
        row.insertCell().textContent = character.skin_color;
        row.insertCell().textContent = character.eye_color;
        row.insertCell().textContent = character.birth_year;
        row.insertCell().textContent = character.gender;
    });

    // Создаем контейнер для таблицы
    const container = document.createElement('div');
    container.classList.add('table-container');
    container.appendChild(newTable);

    // Получаем элемент, куда будем добавлять новую таблицу персонажей
    const charactersTableContainer = document.getElementById('charactersTableContainer');

    // Очищаем контейнер перед добавлением новой таблицы
    charactersTableContainer.innerHTML = '';

    // Добавляем новую таблицу в контейнер
    charactersTableContainer.appendChild(container);
}

// Вызываем функцию обновления таблицы персонажей при загрузке страницы
window.addEventListener('load', updateCharacterTable);

// Добавляем логику поиска персонажей
document.getElementById("searchButton").addEventListener("click", function() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var rows = document.querySelectorAll("#charactersTableContainer table tbody tr");

    var highlightedRow = document.querySelector("#charactersTableContainer table tbody tr.highlighted");
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

