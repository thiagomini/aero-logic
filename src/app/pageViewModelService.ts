import { WorkInterval, WorkIntervalEnum } from './domain/workInterval.enum';

export type PageViewModel = {
  metadata: {
    workInterval: WorkIntervalEnum;
  };
};

export function createPageViewModel(currentTime: Date): PageViewModel {
  let workInterval: WorkIntervalEnum = WorkInterval.BusyTimes;

  const currentHour = currentTime.getHours();

  if (currentHour >= 11 && currentHour < 17) {
    workInterval = WorkInterval.EasyJets;
  } else if (currentHour >= 17 && currentHour < 23) {
    workInterval = WorkInterval.ReturningPips;
  } else if (currentHour >= 23 || currentHour < 5) {
    workInterval = WorkInterval.Sleepies;
  }

  return {
    metadata: {
      workInterval,
    },
  };
}
