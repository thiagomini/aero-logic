import {
  Answer,
  Riddle,
} from '../../domain/RiddleService';

function getState(selectedAnswer: Answer | undefined , correctAnswer: Answer | undefined) {
  let state: string | undefined = 'FAILED';

  if (!selectedAnswer) {
    state = undefined;
  }

  if (!correctAnswer) {
    state = undefined;
  }

  if (selectedAnswer?.id === correctAnswer?.id) {
    state = 'SOLVED';
  }
  return state;
}

export function createRiddleResolutionViewModel(
  riddle: Riddle, selectedAnswer?: Answer, correctAnswer?: Answer
) {
  let state = getState(selectedAnswer, correctAnswer);

  return {
    state,
    answers: riddle.answers.map(answer => {
      const isAnswerSelected = selectedAnswer?.id === answer.id;
      if (!isAnswerSelected) {
        return {...answer, resolution: undefined};
      }

      const isCorrectAnswer = answer.id === correctAnswer?.id

      if (isCorrectAnswer) {
        return {
          ...answer,
          resolution: 'green-300'
        }
      }

      return {
        ...answer,
        resolution: 'red-300'
      }
    }),
  };
}