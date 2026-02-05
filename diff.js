/**
 * Document Diff Library
 * Implements various diff algorithms for comparing text
 */

const Diff = {
    /**
     * Compute the Longest Common Subsequence (LCS) between two arrays
     * @param {Array} a - First array
     * @param {Array} b - Second array
     * @returns {Array} - LCS array
     */
    lcs(a, b) {
        const m = a.length;
        const n = b.length;
        const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (a[i - 1] === b[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        // Backtrack to find LCS
        const lcs = [];
        let i = m, j = n;
        while (i > 0 && j > 0) {
            if (a[i - 1] === b[j - 1]) {
                lcs.unshift({ value: a[i - 1], indexA: i - 1, indexB: j - 1 });
                i--;
                j--;
            } else if (dp[i - 1][j] > dp[i][j - 1]) {
                i--;
            } else {
                j--;
            }
        }

        return lcs;
    },

    /**
     * Compare two arrays and return diff operations
     * @param {Array} a - Original array
     * @param {Array} b - Modified array
     * @returns {Array} - Array of diff operations
     */
    diffArrays(a, b) {
        const lcs = this.lcs(a, b);
        const result = [];
        let aIndex = 0;
        let bIndex = 0;
        let lcsIndex = 0;

        while (aIndex < a.length || bIndex < b.length) {
            if (lcsIndex < lcs.length) {
                const lcsItem = lcs[lcsIndex];

                // Add removed items from a
                while (aIndex < lcsItem.indexA) {
                    result.push({ type: 'removed', value: a[aIndex], indexA: aIndex });
                    aIndex++;
                }

                // Add added items from b
                while (bIndex < lcsItem.indexB) {
                    result.push({ type: 'added', value: b[bIndex], indexB: bIndex });
                    bIndex++;
                }

                // Add unchanged item
                result.push({ type: 'unchanged', value: lcsItem.value, indexA: aIndex, indexB: bIndex });
                aIndex++;
                bIndex++;
                lcsIndex++;
            } else {
                // Handle remaining items
                while (aIndex < a.length) {
                    result.push({ type: 'removed', value: a[aIndex], indexA: aIndex });
                    aIndex++;
                }
                while (bIndex < b.length) {
                    result.push({ type: 'added', value: b[bIndex], indexB: bIndex });
                    bIndex++;
                }
            }
        }

        return result;
    },

    /**
     * Diff two strings line by line
     * @param {string} textA - Original text
     * @param {string} textB - Modified text
     * @param {Object} options - Comparison options
     * @returns {Object} - Diff result with lines and stats
     */
    diffLines(textA, textB, options = {}) {
        let linesA = textA.split('\n');
        let linesB = textB.split('\n');

        if (options.ignoreWhitespace) {
            linesA = linesA.map(line => line.trim());
            linesB = linesB.map(line => line.trim());
        }

        if (options.ignoreCase) {
            linesA = linesA.map(line => line.toLowerCase());
            linesB = linesB.map(line => line.toLowerCase());
        }

        const diff = this.diffArrays(linesA, linesB);

        // Use original lines for display
        const originalLinesA = textA.split('\n');
        const originalLinesB = textB.split('\n');

        const result = diff.map(item => {
            if (item.type === 'removed') {
                return { ...item, originalValue: originalLinesA[item.indexA] };
            } else if (item.type === 'added') {
                return { ...item, originalValue: originalLinesB[item.indexB] };
            } else {
                return { ...item, originalValue: originalLinesA[item.indexA] };
            }
        });

        const stats = {
            added: result.filter(r => r.type === 'added').length,
            removed: result.filter(r => r.type === 'removed').length,
            unchanged: result.filter(r => r.type === 'unchanged').length
        };

        return { diff: result, stats };
    },

    /**
     * Diff two strings word by word
     * @param {string} textA - Original text
     * @param {string} textB - Modified text
     * @param {Object} options - Comparison options
     * @returns {Object} - Diff result with words and stats
     */
    diffWords(textA, textB, options = {}) {
        const tokenize = (text) => {
            const tokens = [];
            const regex = /(\s+|\S+)/g;
            let match;
            while ((match = regex.exec(text)) !== null) {
                tokens.push(match[0]);
            }
            return tokens;
        };

        let wordsA = tokenize(textA);
        let wordsB = tokenize(textB);

        let compareA = wordsA;
        let compareB = wordsB;

        if (options.ignoreWhitespace) {
            compareA = wordsA.map(w => w.trim() || ' ');
            compareB = wordsB.map(w => w.trim() || ' ');
        }

        if (options.ignoreCase) {
            compareA = compareA.map(w => w.toLowerCase());
            compareB = compareB.map(w => w.toLowerCase());
        }

        const diff = this.diffArrays(compareA, compareB);

        const result = diff.map(item => {
            if (item.type === 'removed') {
                return { ...item, originalValue: wordsA[item.indexA] };
            } else if (item.type === 'added') {
                return { ...item, originalValue: wordsB[item.indexB] };
            } else {
                return { ...item, originalValue: wordsA[item.indexA] };
            }
        });

        const stats = {
            added: result.filter(r => r.type === 'added' && r.originalValue.trim()).length,
            removed: result.filter(r => r.type === 'removed' && r.originalValue.trim()).length,
            unchanged: result.filter(r => r.type === 'unchanged').length
        };

        return { diff: result, stats };
    },

    /**
     * Diff two strings character by character
     * @param {string} textA - Original text
     * @param {string} textB - Modified text
     * @param {Object} options - Comparison options
     * @returns {Object} - Diff result with characters and stats
     */
    diffChars(textA, textB, options = {}) {
        let charsA = textA.split('');
        let charsB = textB.split('');

        let compareA = charsA;
        let compareB = charsB;

        if (options.ignoreCase) {
            compareA = charsA.map(c => c.toLowerCase());
            compareB = charsB.map(c => c.toLowerCase());
        }

        const diff = this.diffArrays(compareA, compareB);

        const result = diff.map(item => {
            if (item.type === 'removed') {
                return { ...item, originalValue: charsA[item.indexA] };
            } else if (item.type === 'added') {
                return { ...item, originalValue: charsB[item.indexB] };
            } else {
                return { ...item, originalValue: charsA[item.indexA] };
            }
        });

        const stats = {
            added: result.filter(r => r.type === 'added').length,
            removed: result.filter(r => r.type === 'removed').length,
            unchanged: result.filter(r => r.type === 'unchanged').length
        };

        return { diff: result, stats };
    },

    /**
     * Generate unified diff format
     * @param {string} textA - Original text
     * @param {string} textB - Modified text
     * @param {Object} options - Options including file names
     * @returns {string} - Unified diff string
     */
    createUnifiedDiff(textA, textB, options = {}) {
        const fileA = options.fileA || 'Original';
        const fileB = options.fileB || 'Modified';

        const linesA = textA.split('\n');
        const linesB = textB.split('\n');

        const { diff } = this.diffLines(textA, textB, options);

        let output = [];
        output.push(`--- ${fileA}`);
        output.push(`+++ ${fileB}`);

        let currentHunk = [];
        let hunkStartA = 0;
        let hunkStartB = 0;
        let hunkLinesA = 0;
        let hunkLinesB = 0;
        let lineA = 0;
        let lineB = 0;

        const flushHunk = () => {
            if (currentHunk.length > 0) {
                output.push(`@@ -${hunkStartA + 1},${hunkLinesA} +${hunkStartB + 1},${hunkLinesB} @@`);
                output.push(...currentHunk);
                currentHunk = [];
            }
        };

        for (const item of diff) {
            if (item.type === 'unchanged') {
                if (currentHunk.length > 0) {
                    currentHunk.push(` ${item.originalValue}`);
                    hunkLinesA++;
                    hunkLinesB++;
                }
                lineA++;
                lineB++;
            } else if (item.type === 'removed') {
                if (currentHunk.length === 0) {
                    hunkStartA = lineA;
                    hunkStartB = lineB;
                    hunkLinesA = 0;
                    hunkLinesB = 0;
                }
                currentHunk.push(`-${item.originalValue}`);
                hunkLinesA++;
                lineA++;
            } else if (item.type === 'added') {
                if (currentHunk.length === 0) {
                    hunkStartA = lineA;
                    hunkStartB = lineB;
                    hunkLinesA = 0;
                    hunkLinesB = 0;
                }
                currentHunk.push(`+${item.originalValue}`);
                hunkLinesB++;
                lineB++;
            }
        }

        flushHunk();

        return output.join('\n');
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Diff;
}
