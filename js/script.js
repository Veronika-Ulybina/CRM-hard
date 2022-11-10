'use strict';

{
  const productName = 'apples';
  console.log(productName);

  const productCategory = 'fruits';

  const productCount = 22;
  const productPrice = 150;

  const productSum = productCount * productPrice;
  console.log(`Общая сумма товара: ${productSum}`);
}

{
  const getProductName = prompt('Наименование товара? (Яблоки/груши/морковь/свекла)');
  console.log(typeof getProductName);

  const getProductCategory = prompt('Категория товара? (Фрукты/овощи)');
  console.log(typeof getProductCategory);

  const getProductCount = prompt('Количество товара?');
  console.log(typeof +getProductCount);

  const getProductPrice = prompt('Цена товара? ($)');
  console.log(typeof +getProductPrice);

  const getProductSum = getProductCount * getProductPrice;
  console.log(`На складе ${getProductCount} единицы товара "${getProductName}" на сумму ${getProductSum} долларов`)
}
