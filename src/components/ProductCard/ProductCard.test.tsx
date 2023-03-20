import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductCard from './ProductCard';

const product: string[] = [
  'Базилик зеленый 100г.',
  'https://freshlavka.com/product/bazilik-zelenyj-kg/',
  'Цена указана за 100г. Базилик не только очень ароматная и душистая приправа, но еще и очень полезный и диетический продукт. За счет низкого количества килокалорий его можно смело добавлять в кулинарные блюда, не боясь резкого увеличения пищевой ценности. Наиболее часто его можно встретить в салатах, в сочетаниях с рыбой, морепродуктами и мясом. В состав базилика входит много аскорбиновой кислоты, камфары, каротина и витаминов: В, РР, К, А. Обнаружено в полезном растении эфирное масло, рутин. Также базилик обладает множеством чудесных полезных свойств. Он оказывает благотворное влияние на сердечно-сосудистую систему человека за счет содержания ароматических масел в своем составе. Базилик помогает сконцентрироваться, он активизирует мыслительную деятельность мозга. Благодаря витамину А, базилик укрепляет ногти, оздоравливает волосы и кожу. За счет содержания большого количества витаминов (А, В, С, Е, К) и минералов (кальций, магний, железо, цинк, медь, калий) базилик поддерживает крепкий иммунитет человека. Средний вес одного стебелька с листочками  – 10-25 граммов',
  'https://freshlavka.com/wp-content/uploads/2016/05/IMG_0084-1.jpg',
  '330 руб.',
  'Овощи и зелень',
  'Зелень',
  'Армения',
  '116',
];

describe('Testing ProductCard component', () => {
  afterEach(cleanup);

  it('renders card title', () => {
    const { getByRole } = render(<ProductCard data={product} />);
    const cardTitle = getByRole('heading');
    expect(cardTitle).toHaveTextContent(product[0]);
  });

  it('renders card image', () => {
    const { getByRole } = render(<ProductCard data={product} />);
    const cardImage = getByRole('img');
    expect(cardImage).toHaveAttribute('src', product[3]);
  });
});
