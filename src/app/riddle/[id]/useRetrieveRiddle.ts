import {
  createServerAdapter
} from '../../common/adapter/ServerAdapterFactory';
import { Riddle } from '../../domain/RiddleService';

export const useRetrieveRiddle = createServerAdapter<Riddle, string>({
  name: 'retrieve-riddle', callback: async (id) => {
    const response = await fetch(`http://localhost:3000/api/riddle/${id}`);

    return response.json();
  }
});