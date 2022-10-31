fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
  var test = Array.from(data);
  var myMap = new Map();
  var main = new Map();
  var answer = test.map(myFunction);
  console.log(main);
  
 
  function myFunction(value) {
  
   
    var myJSON = JSON.stringify(value);
   	temp1 = myJSON.indexOf('body')+7;
    temp2 = myJSON.lastIndexOf('}')-1;
    myJSON = myJSON.slice(temp1,temp2);
   	const myArray = myJSON.split(" ");
    myMap = myArray.reduce((accumulator, value) => {
  	var temp = 1;
     if(value in myMap )
       {
         temp = myMap[value];
         temp = temp + 1;
       }
     
     
     return {...accumulator, [value]: temp};
}, {});
  
    main = Object.assign(main,myMap);
}




});