// Створюємо масив з іменами зображень
var imageNames = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

// Вибираємо випадкове ім'я зображення з масиву
var randomImageName = imageNames[Math.floor(Math.random() * imageNames.length)];

// Створюємо елемент <img> для відображення зображення
var imgElement = document.createElement('img');

// Встановлюємо атрибут src для вибраного випадкового зображення
imgElement.src = 'images/' + randomImageName;

// Додаємо елемент <img> до DOM, щоб відобразити зображення на сторінці
document.body.appendChild(imgElement);