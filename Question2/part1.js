fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data)
   var test = Array.from(data);
  var answer = test.map(myFunction);
  const results = answer.filter(element => {
  return element !== undefined;
  });
  
  console.log(results);
  
  function myFunction(value) {
  
   
    var myJSON = JSON.stringify(value);
   	temp1 = myJSON.indexOf('title')+8;
    temp2 = myJSON.lastIndexOf('body')-3;
    myJSON = myJSON.slice(temp1,temp2);
   	const myArray = myJSON.split(" ");
   	if(myArray.length > 6){
        return myJSON;
      }
}

});