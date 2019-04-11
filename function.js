function array_binarySearch(array, element) {
   var position = Math.floor(array.length / 2);

   if (narray[position] === element){
      return position;
   }
   else if (array.length === 1)
   {
      return null;
   }
   else if (narray[position] < element) {
      var arr = array.slice(position + 1);
      var res = array_binarySearch(arr, element);
      if (res === null)
      {
         return null;
      }
      else {
         return position + 1 + res;
      }
   }
   else {
      var arr1 = array.slice(0, position);
      return array_binarySearch(arr1, element);
   }
}
