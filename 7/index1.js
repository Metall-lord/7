function cart(basketAmount, countGoods, promo = null) { let totalAmount = basketAmount;
if (promo = 'Промокод: ДАРИМ300' && basketAmount < 300) {totalAmount = 0; console.log('Промокод: ДАРИМ300 ' + totalAmount + '₽');}
else if (promo = 'Прокод: ДАРИМ300')
{totalAmount -= 300; console.log('ДАРИМ300 ' + totalAmount + '₽');}
if (countGoods >= 10) {const countFiveProcent = basketAmount/100*5; totalAmount -= countFiveProcent; console.log('Более 10 товаров ' + totalAmount + '₽');}
if (basketAmount > 50000) {const countTwentyProcent = totalAmount/100*20; const countDifference = totalAmount - 50000; totalAmount = countDifference - countTwentyProcent; console.log('Более 50 000 ₽ ' + totalAmount + '₽');}
if (promo = 'Акция: СКИДКА15' && basketAmount >= 20000) {const countFifteenProcent = totalAmount/100*15; totalAmount -= countFifteenProcent; console.log('Акция: СКИДКА15 ' + totalAmount +'₽'); }
console.log('Стоимость товаров равна ' + totalAmount + '₽');}
cart(100000, 12, 'Промокод: ДАРИМ300');