'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRetrieveRandomRiddle } from './useRetrieveRandomRiddle';

export const RandomRiddleEntryControl = () => {
  const { getData } = useRetrieveRandomRiddle();
  const router = useRouter();
  const [id, setId] = useState<string>();
  const handleClick = () => {
    router.push(`/riddle/${id}`);
  };

  useEffect(() => {
    getData().then((response) => {
      setId(response.id);
    });
  }, [getData]);

  return (
    <button
      data-test={id ? 'random-riddle-control' : undefined}
      onClick={handleClick}
      className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 border-radius-md bg-blue-100 rounded-full"
    >
      Resolve random riddle
    </button>
  );
};
