export const WorkInterval = {
  BusyTimes: 'Busy Times',
  EasyJets: 'Easy jets',
  ReturningPips: 'Returning pips',
  Sleepies: 'Sleepies',
} as const;

export type WorkIntervalEnum = (typeof WorkInterval)[keyof typeof WorkInterval];
