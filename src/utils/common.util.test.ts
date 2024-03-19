import { generateRandomString } from './common.util';

describe('Common Utils', () => {
  describe('generateRandomString', () => {
    const testCases = [
      {
        input: undefined,
        expected: 16,
      },
      {
        input: 10,
        expected: 10,
      },
    ];

    testCases.forEach(({ input, expected }) =>
      it(`should return string with length ${expected}`, () => {
        const result = generateRandomString(input);

        expect(result.length).toBe(expected);
      })
    );
  });
});
