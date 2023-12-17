/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
let map1=new Map()
let l=strs.length
for (let i=0;i<l;i++){
    let sortedStr=strs[i].split('').sort().join('')
    if(!map1.has(sortedStr)){
        map1.set(sortedStr,[strs[i]])
    }else{
        map1.get(sortedStr).push(strs[i])
    }
}

     return [...map1.values()]
  
       
   
  
 
};