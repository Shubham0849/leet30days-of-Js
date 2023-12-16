/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
let firstString=s.split('').sort().join('')
let secondString=t.split('').sort().join('')
return firstString==secondString?true:false
};