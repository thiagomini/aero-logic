import {
  useRetrieveRandomRiddle
} from '../useRetrieveRandomRiddle';
import {
  useRetrieveRiddle
} from '../riddle/[id]/useRetrieveRiddle';

describe('Random riddle', () => {
  it('see random riddle', () => {
    // Stub random riddle
    cy.injectFakeAdapter(useRetrieveRandomRiddle, {
      body: {
        id: '1',
      },
    });
    cy.injectFakeAdapter(useRetrieveRiddle, {
      body: {
        id: "1",
        contents: "What is the most busy air traffic times?"  ,
        answers: [
          { id: '1', text: 'Early morning'},
          { id: '2', text: 'Late night'},
          { id: '3', text: 'None of the above'},
        ],
      }
    })

    cy.visit('/');

    cy.get('[data-test="metadata"]').should('be.visible');

    cy.get('[data-test="random-riddle-control"]').click();


    cy.contains('What is the most busy air traffic times?').should('be.visible');
    cy.contains('Early morning').should('be.visible');
    cy.contains('Late night').should('be.visible');
    cy.contains('None of the above').should('be.visible');
  });

  it.skip('resolves a riddle')
});