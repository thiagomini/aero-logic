export type Riddle = {
  id: string;
  contents: string;
  answers: Answer[]
};

export type Answer = {
  id: string,
  text: string
}

const DEFAULT_RIDDLE: Riddle = {
  id: 'DEFAULT_RIDDLE_ID',
  contents: 'DEFAULT_RIDDLE_CONTENTS',
  answers: []
};

export function createRiddle(riddle?: Partial<Riddle>): Riddle {
  return {
    ...DEFAULT_RIDDLE,
    ...riddle,
  };
}