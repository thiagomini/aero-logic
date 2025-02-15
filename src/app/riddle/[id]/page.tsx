import { Riddle } from '../../domain/RiddleService';
import { useRetrieveRiddle } from './useRetrieveRiddle';
import { RiddleResolution } from './RiddleResolution';

export default async function RiddlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getData } = await useRetrieveRiddle();
  const riddle: Riddle = await getData(id);

  return (
    <div>
      <p className="text-lg font-medium text-gray-900">{riddle.contents}</p>
      <RiddleResolution riddle={riddle} />
    </div>
  );
}
