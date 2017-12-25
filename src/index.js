lore = [12,58,278,50,65,92,64,753,85]

function min(arr) {
    return arr.reduce(function (previousVariable, newVariable) {
      return ( previousVariable < newVariable ? previousVariable : newVariable );
    });
  }
  
  function max(arr) {
    return arr.reduce(function (previousVariable, newVariable) {
      return ( previousVariable > newVariable ? previousVariable : newVariable );
    });
  }

  function sum(arr){
    var result = arr.reduce(function(sum, current) {
        return sum + current;
      }, 0);
  }
  
console.log(max(lore))
console.log(min(lore))
console.log(sum(lore))