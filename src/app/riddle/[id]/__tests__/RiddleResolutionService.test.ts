import {
  Answer, createRiddle,
  Riddle,
} from '../../../domain/RiddleService';

import {expect, describe, it} from 'vitest';
import {
  createRiddleResolutionViewModel
} from '../RiddleResolutionService';

describe('Riddle resolution view model', () => {
  it('returns model when answer is not selected', () => {
    const riddle = createRiddle({
        answers: [
          { id: 'x', text: 'XXX', },
          { id: 'y', text: 'YYY', },
          { id: 'z', text: 'ZZZ' },
        ],
    });
    const selectedAnswer = undefined
    const correctAnswer: Answer = {
      id: 'x',
      text: 'XXX'
    }

    const result = createRiddleResolutionViewModel(riddle, selectedAnswer, correctAnswer);

    expect(result).toEqual({
      state: undefined,
      answers: [
        { id: 'x', text: 'XXX', },
        { id: 'y', text: 'YYY', },
        { id: 'z', text: 'ZZZ' },
      ]
    })
  });

  it('returns model when answer is correct', () => {
    const riddle = createRiddle({
      answers: [
        { id: 'x', text: 'XXX', },
        { id: 'y', text: 'YYY', },
        { id: 'z', text: 'ZZZ' },
      ],
    });
    const correctAnswer: Answer = {
      id: 'x',
      text: 'XXX'
    }
    const selectedAnswer = structuredClone(correctAnswer);

    const result = createRiddleResolutionViewModel(riddle, selectedAnswer, correctAnswer);

    expect(result).toEqual({
      state: 'SOLVED',
      answers: [
        { id: 'x', text: 'XXX', resolution: 'green-300' },
        { id: 'y', text: 'YYY' },
        { id: 'z', text: 'ZZZ' },
      ]
    })
  });

  it('returns model when answer is wrong', () => {
    const riddle = createRiddle({
      answers: [
        { id: 'x', text: 'XXX', },
        { id: 'y', text: 'YYY', },
        { id: 'z', text: 'ZZZ' },
      ],
    });
    const correctAnswer: Answer = {
      id: 'x',
      text: 'XXX'
    }
    const selectedAnswer: Answer = {
     id: 'y', text: 'YYY',
    }

    const result = createRiddleResolutionViewModel(riddle, selectedAnswer, correctAnswer);

    expect(result).toEqual({
      state: 'FAILED',
      answers: [
        { id: 'x', text: 'XXX' },
        { id: 'y', text: 'YYY', resolution: 'red-300' },
        { id: 'z', text: 'ZZZ' },
      ]
    })
  });
});