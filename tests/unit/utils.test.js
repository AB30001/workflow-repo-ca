import { describe, expect, test, beforeEach } from 'vitest';
import { isActivePath } from '../../js/utils/userInterface.js';
import { getUsername } from '../../js/utils/storage.js';

// Test isActivePath function
describe('isActivePath', () => {
  test('returns true when current path matches href exactly', () => {
    expect(isActivePath('/', '/')).toBe(true);
  });

  test('returns true for root path when path is "/" or "/index.html"', () => {
    expect(isActivePath('/', '/')).toBe(true);
    expect(isActivePath('/', '/index.html')).toBe(true);
  });

  test('returns true when current path includes the href', () => {
    expect(isActivePath('/profile', '/profile/settings')).toBe(true);
  });

  test('returns false when paths don\'t match', () => {
    expect(isActivePath('/about', '/profile')).toBe(false);
  });
});

// Setup localStorage mock
beforeEach(() => {
  // Clear localStorage before each test
  localStorage.clear();
});

// Test getUsername function
describe('getUsername', () => {
  test('returns name from user object in storage', () => {
    const user = { name: 'John Doe' };
    localStorage.setItem('user', JSON.stringify(user));
    expect(getUsername()).toBe('John Doe');
  });

  test('returns null when no user exists in storage', () => {
    expect(getUsername()).toBeNull();
  });
});
