var map = ['', 'BFPV', 'CGJKQSXZ', 'DT', 'L', 'MN', 'R', 'WH', 'AEIOUY']

var mapToNumbers = function(str){
  for(var i = 1; i < map.length; i++)
    str = str.replace(new RegExp("["+map[i]+"]",'gi'), i)
  return str
}

var removeDuplicateNumbers = function(str){
  return str.split("").map(function(num, index, array){
    if(index > 1 && (array[index - 1] === '7' && array[index - 2] === num)) {
      // do nothing...
    } else if((index === 0 || (array[index - 1] !== num))) {
      return num
    }
  }).join("")
}

var removeVowels = function(str){
  return str[0] + str.substring(1).replace(/[78]/gi, "")
}

module.exports = function encode(to_enc, opts){
  // Change the string to all uppercase, remove anything that isn't an uppercase letter, and split into array of chars
  // the series order changes depending on whether we want the mysql equivalent algo
  var defaults = {mysql: false, zeroed: true},
      settings = {},
      proc = String(to_enc).toUpperCase().replace(/[^A-Z]/g,''),
      first = proc[0]
  
  for (var attrname in defaults) {
    settings[attrname] = opts && opts.hasOwnProperty(attrname) && opts[attrname] !== null ? opts[attrname] : defaults[attrname]
  }
  var series = settings.mysql ? [mapToNumbers, removeVowels, removeDuplicateNumbers] : [mapToNumbers, removeDuplicateNumbers, removeVowels]

  for (var i = 0; i < series.length; i++) {
    proc = series[i](proc)
  }
  proc = proc.substring(1)
  var zeroes = settings.zeroed ? (new Array(Math.max(3 - proc.length,1) + 1).join('0')) : ""
  return first + (proc + zeroes).slice(0, Math.max(3, settings.mysql ? proc.length : 3))
}