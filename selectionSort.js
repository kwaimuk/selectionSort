/* jshint esversion: 6 */
var selectionSort = (arr) => {
var sorted=[];


  while(arr.length>0){
  var min = arr[0];
  var index = null;
    for(i=1;i<arr.length;i++){
      if(arr[i]<min){
         index = i;
        min = arr[i];

      }
    }
    sorted.push(min);
    arr.splice(index, 1);
  }





    return sorted;
};

/*  for (var i = 1; i <= arr.length-1; i++){
    var min = arr[0];

    while(min<arr[i]){
      var temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
      console.log("if",arr);
    }*/
module.exports = selectionSort;