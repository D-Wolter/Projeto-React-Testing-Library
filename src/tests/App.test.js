import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

describe('Teste links de navegação: home', () => {
  test('Teste se link de navegação: home é renderizado', () => {
    // renderWithRouter(<App />)

    const { history } = renderWithRouter(<App />);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');

    const linkHome = screen.getByRole('link', {
      name: /home/i,
    });
    expect(linkHome).toBeInTheDocument();

    userEvent.click(linkHome);

    const titlePokedex = screen.getByRole('heading', {
      name: /pokédex/i,
    });
    expect(titlePokedex).toBeInTheDocument();
  });
  test('Teste links de navegação: About', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const linkAbout = screen.getByRole('link', {
      name: /About/i,
    });
    expect(linkAbout).toBeInTheDocument();
  });
  test('Teste links de navegação: Favorites', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const linkFavPoks = screen.getByRole('link', {
      name: /Favorite Pokémons/i,
    });
    expect(linkFavPoks).toBeInTheDocument();
  });
});
