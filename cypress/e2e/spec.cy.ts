/// <reference types="cypress" />

describe('Testing app:', () => {
  it('checks Main page', () => {
    cy.visit('/main');
    cy.url().should('include', '/main');
  });

  it('checks Gallery page', () => {
    cy.visit('/gallery');
    cy.url().should('include', '/gallery');

    const text = 'Создайте свою галлерею!';
    cy.get('h2').contains(text);
  });

  it('checks About page', () => {
    cy.visit('/about');
    cy.url().should('include', '/about');

    const text = 'Unsearch provides acesss to millions of Unsplash photos.';
    cy.get('p').contains(text);
  });

  it('should show 10 cards by default search', () => {
    cy.visit('/');
    cy.get('article').should('have.length', 10);
  });

  it('displays Error 404 message', () => {
    cy.visit('/non-exist');
    cy.contains('Sorry, page not found').should('be.visible');
  });
});
