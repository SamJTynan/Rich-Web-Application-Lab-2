fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json.filter(wordcount))) 

function wordcount(json) {
  const body = json.body
  const words = body.split(" ")
  console.log(words.reduce((map, word) => map.set(word, (map.get(word) || 0) + 1), new Map()));
}
