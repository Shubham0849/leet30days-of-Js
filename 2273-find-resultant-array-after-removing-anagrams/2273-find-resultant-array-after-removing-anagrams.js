/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
for(let i=1;i<words.length;){
   const currentWord = words[i].split('').sort().join()
    const prevWord = words[i - 1].split('').sort().join()
    prevWord===currentWord ?words.splice(i,1):i++
}

return words


};