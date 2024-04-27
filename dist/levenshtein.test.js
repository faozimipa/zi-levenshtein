"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('Levenshtein Distance Function', () => {
    test('should calculate correct distance between two strings', () => {
        expect((0, index_1.levenshtein)('kitten', 'sitting')).toBe(3);
        expect((0, index_1.levenshtein)('flaw', 'lawn')).toBe(2);
        expect((0, index_1.levenshtein)('gumbo', 'gambol')).toBe(2);
    });
    test('should return target length when source is empty', () => {
        expect((0, index_1.levenshtein)('', 'target')).toBe(6);
    });
    test('should return source length when target is empty', () => {
        expect((0, index_1.levenshtein)('source', '')).toBe(6);
    });
    test('should return 0 when both strings are empty', () => {
        expect((0, index_1.levenshtein)('', '')).toBe(0);
    });
    test('should return 0 when both strings are identical', () => {
        expect((0, index_1.levenshtein)('identical', 'identical')).toBe(0);
    });
});
