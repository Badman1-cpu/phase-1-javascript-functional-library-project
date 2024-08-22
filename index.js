function myEach(a,b){
if(Array.isArray(a)  === true){//calls alert with each element passed
 //use map  
    a.map(b)
} else{
 //calls alert properly on object values
 //use filter
    for(let c of Object.values(a)){
        b(c)
    }
}
 //returns orginal collection
 return a
}
function myMap(collection, callback) {
    if (Array.isArray(collection)) {
      let newArray = [...collection];
      let result = newArray.map(callback);
      return result;
    } else {
        let newObj = Object.values(collection);
        let result = newObj.map(callback);
      for (let key in newObj) {
        if (Array.isArray(newObj[key])) {
          result[key] = newObj[key].map(callback);
        } else {
          result[key] = callback(newObj[key]);
        }
      }
      return result;
    }
  }
function myReduce(collection , callback, acc){
if(Array.isArray(collection)){
    let newArray = [...collection];
    if(acc === undefined){
        let sum = newArray.reduce(callback)
        return sum
    }
    else{
    let sum = newArray.reduce(callback,acc)
    return sum
    }
}
else{
    let newObj = Object.values(collection);
    let result = newObj.reduce(callback)
    return result
}
}
function myFind(collection , predicate){
if(Array.isArray(collection)){
let result = collection.find(predicate)
return result
}
else{
collection.values.find(predicate)
}
}
function myFilter(collection , predicate){
if(Array.isArray(collection)){
  let result = collection.filter(predicate)
  return result
}
else{
    let result = collection.values.filter(predicate)
    return result 
}
}
function mySize(){

}
function myFirst(){

}
function myLast(){

}
function myKeys(){

}
function myValue(){

}