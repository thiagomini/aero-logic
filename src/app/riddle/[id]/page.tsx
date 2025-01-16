import { Riddle } from '../../domain/RiddleService';
import {
  useRetrieveRiddle
} from './useRetrieveRiddle';

export default async function RiddlePage({ params }: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getData } = await useRetrieveRiddle();
  const riddle: Riddle = await getData(id);

  return <div>
    <p>{riddle.contents}</p>
    <ul>
      {riddle.answers.map(answer => <li key={answer.id}>{answer.text}</li>)}
    </ul>
  </div>
}