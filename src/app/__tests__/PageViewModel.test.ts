import { describe, it, expect } from 'vitest';
import { createPageViewModel } from '../pageViewModelService';

describe('Page view model', () => {
  describe('work interval retrieval', () => {
    it.each`
      currentTime               | expectedInterval
      ${dateAtTime('05:00:00')} | ${'Busy Times'}
      ${dateAtTime('10:59:59')} | ${'Busy Times'}
      ${dateAtTime('11:00:00')} | ${'Easy jets'}
      ${dateAtTime('16:59:59')} | ${'Easy jets'}
      ${dateAtTime('17:00:00')} | ${'Returning pips'}
      ${dateAtTime('22:59:59')} | ${'Returning pips'}
      ${dateAtTime('23:00:00')} | ${'Sleepies'}
      ${dateAtTime('04:59:59')} | ${'Sleepies'}
    `(
      'returns interval for $currentTime',
      ({
        currentTime,
        expectedInterval,
      }: {
        currentTime: Date;
        expectedInterval: string;
      }) => {
        new Date().getHours();
        // Act
        const result = createPageViewModel(currentTime);

        // Assert
        expect(result.metadata.workInterval).toBe(expectedInterval);
      }
    );
  });
});

function dateAtTime(isoTime: `${string}:${string}:${string}`): Date {
  return new Date(`2025-01-01T${isoTime}`);
}
