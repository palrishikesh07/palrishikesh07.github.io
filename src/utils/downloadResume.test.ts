import { describe, it, expect } from 'vitest';
import { getResumeFileName } from './downloadResume';

describe('Resume Downloader Utility', () => {
  it('formats filename with current date and month correctly', () => {
    const fixedDate = new Date(2026, 9, 22); // October 22, 2026
    expect(getResumeFileName(fixedDate)).toBe('Rishikesh_Pal_22_October.pdf');
  });
});