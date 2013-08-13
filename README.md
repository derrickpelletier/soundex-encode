Soundex Encoder

`npm install soundex-encode`

A simple library to encode strings using the Soundex algorithm.

```javascript
var Soundex = require('soundex-encode')

// Standard 3-digit
Soundex('Battlestar') // B342

// MySQL (at least in 5.6...)
Soundex('Battlestar', {mysql:true}) // B34236

// Un-zero-finished hashes
Soundex('Jackson', {zeroed:false}) // J25
```
-----

## Notes

+ Could be errors, need to test more extensively.
+ Plan to add a distance comparator for computing the similarity between two hashes.
