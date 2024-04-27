export function levenshtein(source: string, target: string): number {
    if (!source.length) return target.length;
    if (!target.length) return source.length;
    const arr: number[][] = [];
    for (let i = 0; i <= target.length; i++) {
        arr[i] = [i];
        for (let j = 1; j <= source.length; j++) {
            if (i === 0) {
                arr[i][j] = j;
            } else {
                const cost = target[i - 1] === source[j - 1] ? 0 : 1;
                arr[i][j] = Math.min(arr[i - 1][j] + 1, arr[i][j - 1] + 1, arr[i - 1][j - 1] + cost);
            }
        }
    }

    return arr[target.length][source.length];
}