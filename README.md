Soundex Encoder

A simple library to encode strings using the Soundex algorithm.

```javascript
var Soundex = require('soundex-encode')

// Standard 3-digit
Soundex('Battlestar') // B342

// MySQL (at least in 5.6...)
Soundex('Battlestar', true) // B34236
```
-----

## Notes

+ Could be errors, need to test more extensively.
+ Plan to add a distance comparator for computing the similarity between two hashes.
