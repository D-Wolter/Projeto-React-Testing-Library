import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('teste PokemonDetails', () => {
  test('teste se as infos detalhadas do pokémon selecionado são exibidas:', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/pokemons/25');
    });
    const nameDetails = screen.getByRole('heading', { name: /pikachu details/i });
    expect(nameDetails).toBeInTheDocument();
    const btnDetails = screen.queryByRole('link', { name: /more details/i });
    expect(btnDetails).toBeNull();
    const summary = screen.getByRole('heading', { name: /summary/i });
    expect(summary).toBeInTheDocument();
    const txt1 = 'This intelligent Pokémon roasts hard berries ';
    const txt2 = 'with electricity to make them tender enough to eat.';
    const fullTxt = screen.getByText(txt1 + txt2);
    expect(fullTxt).toBeInTheDocument();
  });
});
