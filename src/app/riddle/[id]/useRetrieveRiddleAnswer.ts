import { getAnswerFor } from 'riddle-exam';
import {
  createClientAdapter
} from '../../common/adapter/ClientAdapterFactory';
import {
  Answer,
  Riddle,
} from '../../domain/RiddleService';

export const useRetrieveRiddleAnswer = createClientAdapter<Answer, Pick<Riddle, 'id'>>({
  name: 'use-retrieve-riddle-answer',
  callback: (input) => {
    return getAnswerFor(input!.id);
  }
});