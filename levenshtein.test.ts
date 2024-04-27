import { levenshtein } from './index';

describe('Levenshtein Distance Function', () => {
    test('should calculate correct distance between two strings', () => {
        expect(levenshtein('kitten', 'sitting')).toBe(3);
        expect(levenshtein('flaw', 'lawn')).toBe(2);
        expect(levenshtein('gumbo', 'gambol')).toBe(2);
    });

    test('should return target length when source is empty', () => {
        expect(levenshtein('', 'target')).toBe(6);
    });

    test('should return source length when target is empty', () => {
        expect(levenshtein('source', '')).toBe(6);
    });

    test('should return 0 when both strings are empty', () => {
        expect(levenshtein('', '')).toBe(0);
    });

    test('should return 0 when both strings are identical', () => {
        expect(levenshtein('identical', 'identical')).toBe(0);
    });
});

