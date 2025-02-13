'use client';

import { useEffect, useState } from 'react';
import { Answer, Riddle } from '../../domain/RiddleService';
import { useRetrieveRiddleAnswer } from './useRetrieveRiddleAnswer';
import { createRiddleResolutionViewModel } from './RiddleResolutionService';

type Props = {
  riddle: Riddle;
};

export const RiddleResolution = ({ riddle }: Props) => {
  const [correctAnswer, setCorrectAnswer] = useState<Answer>();
  const [selected, setSelected] = useState<Answer>();
  const { getData } = useRetrieveRiddleAnswer();
  const model = createRiddleResolutionViewModel(
    riddle,
    selected,
    correctAnswer
  );
  const handleClick = async (answer: Answer) => {
    setSelected(answer);
  };

  useEffect(() => {
    getData({ id: riddle.id }).then(setCorrectAnswer);
  }, [getData, riddle.id]);

  return (
    <>
      <ul className="text-gray-900 space-y-2">
        {model.answers.map((answer, index) => {
          return (
            <li
              data-testid="riddle-option"
              key={answer.id}
              className={`${answer.resolution} cursor-pointer px-4 py-2 rounded-lg border text-lg transition hover:bg-gray-200`}
              onClick={() => handleClick(answer)}
            >
              {index + 1}.{answer.text}
            </li>
          );
        })}
      </ul>
      {model.state === 'FAILED' && (
        <div data-testid="riddle-resolution" className="text-red-600">
          Wrong answer
        </div>
      )}
      {model.state === 'SOLVED' && (
        <div data-testid="riddle-resolution" className="text-green-600">
          Good Job!
        </div>
      )}
    </>
  );
};
