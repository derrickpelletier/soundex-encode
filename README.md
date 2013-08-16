# Soundex Encoder
A simple javascript module to encode strings using Soundex.

Soundex is an algorithm designed to index strings based on their English pronunciations.

See [Soundex on Wikipedia](http://en.wikipedia.org/wiki/Soundex) for more info.


`npm install soundex-encode`

```javascript
var Soundex = require('soundex-encode')

// Standard 3-digit
Soundex('Battlestar') // B342

// MySQL style (at least in 5.6...?)
Soundex('Battlestar', {mysql:true}) // B34236

// Un-zero-finished hashes
Soundex('Jackson', {zeroed:false}) // J25
```
-----

## Notes

+ Could be errors, need to test more extensively, but currently succeeding on all test examples I found on wikipedia and several other sources.
+ Plan to add a distance comparator for computing the similarity between two hashes. Maybe Levenshtein.
