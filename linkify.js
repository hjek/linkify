function linkify(string){
  return string.replace(/\S+\.\S+/g, '<a href="$&">$&</a>') 
}
// example:
// console.log( linkify('look at this link node.ground.tk and https://ground.tk/webpd and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace bcuz they r good') )

module.exports = linkify
