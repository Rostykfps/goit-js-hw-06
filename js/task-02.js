const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас .
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredientsListEl = document.querySelector('#ingredients');
const elements = ingredients.map(ingredient => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = ingredient;

  return ingredientsItem;
});

ingredientsListEl.append(...elements);
