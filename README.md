# Document Comparison Tool

A browser-based document comparison tool that allows you to compare two text documents side by side with highlighted differences.

## Features

- **Multiple Comparison Modes**
  - Line by Line: Compare documents at the line level
  - Word by Word: Detailed word-level comparison
  - Character by Character: Most granular comparison

- **Comparison Options**
  - Ignore Whitespace: Skip whitespace differences
  - Ignore Case: Case-insensitive comparison

- **Side-by-Side Diff View**
  - Visual highlighting of added, removed, and unchanged content
  - Line numbers for easy reference
  - Color-coded differences

- **Unified Diff Output**
  - Standard diff format output
  - Copy to clipboard functionality

- **File Support**
  - Load files directly from your computer
  - Supports .txt, .md, .json, .xml, .html, .css, .js files

- **Statistics**
  - Real-time line, word, and character counts
  - Comparison summary with change percentage

## Usage

1. Open `index.html` in a web browser
2. Enter or paste text in the "Original Document" panel
3. Enter or paste text in the "Modified Document" panel
4. Select your preferred comparison mode
5. Click "Compare Documents"
6. View the highlighted differences in the results section

## Files

- `index.html` - Main HTML interface
- `styles.css` - CSS styling
- `app.js` - Main application logic
- `diff.js` - Diff algorithm implementation (LCS-based)

## Algorithm

The comparison tool uses the Longest Common Subsequence (LCS) algorithm to compute differences between documents. This provides accurate diff results similar to popular diff tools like `git diff`.

## Browser Compatibility

Works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

MIT License
