/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let sum=0
    let newArray=[]
    let maxEl=0
    for (let i=0;i<accounts.length;i++){
  
      sum=0;
        for(let j=0;j<accounts[i].length;j++){
          console.log(accounts[i][j])
            sum +=accounts[i][j]
          
        newArray.push(sum)    
 }
   
    }
   // console.log(newArray)
    maxEl=Math.max(...newArray)
    return maxEl    
    };