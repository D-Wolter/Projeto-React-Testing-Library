import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('component pokémon:', () => {
  test('whether a card is rendered with information from a particular Pokémon:', () => {
    renderWithRouter(<App />);
    const pokName = screen.getByTestId('pokemon-name');
    expect(pokName).toBeInTheDocument();
    expect(pokName.innerHTML).toBe('Pikachu');
    const pokType = screen.getByTestId('pokemon-type');
    expect(pokType).toBeInTheDocument();
    expect(pokType.innerHTML).toBe('Electric');
    const pokWeight = screen.getByTestId('pokemon-weight');
    expect(pokWeight).toBeInTheDocument();
    expect(pokWeight.innerHTML).toBe('Average weight: 6.0 kg');
    const pokImg = screen.getByRole('img', { name: /Pikachu sprite/i });
    expect(pokImg.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
});
