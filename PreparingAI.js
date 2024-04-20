// Получаем ссылки на все элементы, с которыми будем работать
const insertRadio = document.getElementById("insert");
const editRadio = document.getElementById("edit");
const exportRadio = document.getElementById("export");

const tab1 = document.getElementById("Tab1");
const tab2 = document.getElementById("Tab2");
const tab3 = document.getElementById("Tab3");

// Добавляем обработчики событий для радиокнопок
insertRadio.addEventListener("change", function() {
    tab1.style.display = "block";
    tab2.style.display = "none";
    tab3.style.display = "none";
});

editRadio.addEventListener("change", function() {
    tab1.style.display = "none";
    tab2.style.display = "block";
    tab3.style.display = "none";
});

exportRadio.addEventListener("change", function() {
    tab1.style.display = "none";
    tab2.style.display = "none";
    tab3.style.display = "block";
});

// Изначально скрываем все блоки
tab1.style.display = "block";
tab2.style.display = "none";
tab3.style.display = "none";