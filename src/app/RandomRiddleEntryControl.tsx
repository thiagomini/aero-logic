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
    >
      Resolve random riddle
    </button>
  );
};
