var map = ['', 'BFPV', 'CGJKQSXZ', 'DT', 'L', 'MN', 'R', 'WH', 'AEIOUY']

// Map each element in the array to its corresponding value in the map object
var mapToNumbers = function(arr){
  return arr.map(function (l) {
    for (var i = 0; i < map.length; i++)
      if (map[i].indexOf(l) !== -1)
        return i
  })
}

// duplicate numbers, including those seprated by H/W are now undefined
var removeDuplicateNumbers = function(arr){
  return arr.map(function(num, index, array){
    if(index > 1 && (array[index - 1] === 7 && array[index - 2] === num)) {
      // do nothing...
    } else if(index === 0 || (array[index - 1] !== num)) {
      return num
    }
  })
}

// remove any vowels from the array.
var removeVowels = function(arr){
  var reduced = []
  for(var i = 0; i < arr.length; i++)
    if(i === 0 || arr[i] < 7) 
      reduced.push(arr[i])
  return reduced
}

// turn the array into a string of numbers, make sure first one isn't skipped
var squish = function(arr){
  arr[0] = "0"
  return arr.join('').substring(1)
}


module.exports = function encode(to_enc, mysql){
  // Change the string to all uppercase, remove anything that isn't an uppercase letter, and split into array of chars
  var proc = String(to_enc).toUpperCase().replace(/[^A-Z]/g,'').split(''),
      first = proc[0],
      // the series order changes depending on whether we want the mysql equivalent algo
      series = mysql ? [mapToNumbers, removeVowels, removeDuplicateNumbers, squish] : [mapToNumbers, removeDuplicateNumbers, removeVowels, squish]
  
  for (var i = 0; i < series.length; i++) {
    proc = series[i](proc)
  }

  return first + (proc + (new Array(Math.max(3 - proc.length,1) + 1).join('0'))).slice(0, Math.max(3, mysql ? proc.length : 3))
}