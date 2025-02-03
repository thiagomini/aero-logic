'use client';

import { useEffect, useState } from 'react';
import {
  Answer,
  Riddle,
} from '../../domain/RiddleService';
import {
  useRetrieveRiddleAnswer
} from './useRetrieveRiddleAnswer';
import {
  createRiddleResolutionViewModel
} from './RiddleResolutionService';

type Props = {
  riddle: Riddle;
};

export const RiddleResolution = ({ riddle }: Props) => {
  const [correctAnswer, setCorrectAnswer] = useState<Answer>();
  const [selected, setSelected] = useState<Answer>();
  const { getData } = useRetrieveRiddleAnswer();
  const model = createRiddleResolutionViewModel(riddle, selected, correctAnswer);
  const handleClick = async (answer: Answer) => {
    setSelected(answer);
  };

  useEffect(() => {
    getData({ id: riddle.id }).then(setCorrectAnswer)
  }, []);

  return (
    <>
      <ul>
        {model.answers.map(answer => {
          return <li
            data-testid="riddle-option"
            key={answer.id}
            className={answer.resolution}
            onClick={() => handleClick(answer)}
          >{answer.text}</li>;
        })}
      </ul>
      {model.state === 'FAILED' && (<div data-testid="riddle-resolution" className="red-100">Wrong answer</div>)}
      {model.state === 'SOLVED' && (<div data-testid="riddle-resolution" className="green-100">Good Job!</div>)}
    </>
  );
}