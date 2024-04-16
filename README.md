Данный проект представляет собой сайт для тех, кто хочет погрузиться в мир "Star Wars". Есть 4 страницы: Главная страница представляет собой приветственное сообщение и 3 элемента которые можно выбрать: Планеты, Персонажи и Корабли. Страницы Планет и Персонажей почти одинаковы, есть поиск и таблица, который при введении названия планеты, перелистывает страницу до нужной части таблицы и высвечивает. В странице есть две таблицы, первая таблица эта таблица которую я написал сам полность заполнив данными из источников в ручную, вторая таблица это та таблица которая полностью заполнена через API. В странице с кораблями представлены только 3 главных корабля.
Все 3 уровня были выполнены, но последняя часть вызвала проблемы с тем, что я до этого не сталкивался с api, и большую часть мне пришлось подглядывать с интернета, но это было интересно. Так же я до использования api уже создал таблицу куда сам вписывал данные и реализовал функцию. И только потом поняв что впринципе такое api, я добавил новую таблицу и заполнил ее данными через swapi.
Стэк: HTML+CSS+JS
Обьяснение каждого файла:
index.html - Главная страница
style.css - CSS файл для index.html
planets.html - страница с планетами
planets.css - CSS файл для planets.html
characters.html - страница с персонажами
characters.css - CSS файл для characters.html
spaceships.html - страница с кораблями
spaceships.css - CSS файл для spacehips.html
search.js - функция поиска из таблицы которую я заполнил сам
fetchPlanets.js - Функция загрузки данных с api и поиска планет
fecthCharacters.js - Функция загрузки данных с api и поиска персонажей

Ссылка на страницу: https://parassatz.github.io/StarWars/
