import { createClientAdapter } from './common/adapter/ClientAdapterFactory';
import { Riddle } from './domain/RiddleService';

export const useRetrieveRandomRiddle = createClientAdapter<Pick<Riddle, 'id'>>({
  name: 'retrieve-random-riddle',
  callback: async () => {
    const response = await fetch('http://localhost:3000/api/random-riddle');

    return response.json();
  },
});
