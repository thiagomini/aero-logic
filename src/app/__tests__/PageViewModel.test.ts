import { describe, it, expect } from 'vitest';
import {
  createPageViewModel
} from '../pageViewModelService';

describe('Page view model', () => {
  describe('work interval retrieval', () => {
    it('returns interval for morning hours', () => {
      // Arrange
      const currentTime = new Date()
      currentTime.setHours(5)

      // Act
      const result = createPageViewModel(currentTime)

      // Assert
      expect(result.metadata.workInterval).toBe('Busy Times')
    })

    it.todo('returns interval for afternoon hours')
    it.todo('returns interval for evening hours')
    it.todo('returns interval for night hours')
  });
});