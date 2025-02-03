import {
  useRetrieveRandomRiddle
} from '../useRetrieveRandomRiddle';
import {
  useRetrieveRiddle
} from '../riddle/[id]/useRetrieveRiddle';
import {
  useRetrieveRiddleAnswer
} from '../riddle/[id]/useRetrieveRiddleAnswer';

describe('Solve Riddle', () => {
  it('solves a riddle', () => {
    // Arrange
    // The user navigates to the riddle page
    // The user sees the riddle options:
    cy.injectFakeAdapter(useRetrieveRiddle, {
      body: {
        id: "1",
        contents: "What answer is correct?"  ,
        answers: [
          { id: '1', text: 'The Right Answer!'},
          { id: '2', text: 'The wrong Answer'},
          { id: '3', text: 'Wrong answer too!'},
        ],
      }
    })
    cy.injectFakeAdapter(useRetrieveRiddleAnswer, {
      body: {
        id: '1',
        text: 'The Right Answer'
      },
    });
    cy.visit('/riddle/1');

    // Act
    // The user clicks on the correct answer
    cy.get('[data-testid=riddle-option]')
      .contains('The Right Answer!')
      .click()

    // Assert
    // We display a successful message
    cy.findByTestId('riddle-resolution')
      .should('be.visible')
      .should('contain', 'Good Job')
  });

  it('fails a riddle', () => {
    // Arrange
    // The user navigates to the riddle page
    // The user sees the riddle options:
    cy.injectFakeAdapter(useRetrieveRiddle, {
      body: {
        id: "1",
        contents: "What answer is correct?"  ,
        answers: [
          { id: '1', text: 'The Right Answer!'},
          { id: '2', text: 'The wrong Answer'},
          { id: '3', text: 'Wrong answer too!'},
        ],
      }
    })
    cy.injectFakeAdapter(useRetrieveRiddleAnswer, {
      body: {
        id: '1',
        text: 'The Right Answer'
      },
    });
    cy.visit('/riddle/1');

    // Act
    // The user clicks on the correct answer
    cy.get('[data-testid=riddle-option]')
      .contains('The wrong Answer')
      .click()

    // Assert
    // We display a successful message
    cy.findByTestId('riddle-resolution')
      .should('be.visible')
      .should('contain', 'Wrong answer')
  });
})