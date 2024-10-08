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
  if(predicate === false){
    let result = []
    return result
  }
  else{
  let result = collection.filter(predicate)
  return result
  }
}
else{
    let result = Object.values(collection).filter(predicate)
    if(predicate === false ){
      let result = []
      return result
    }
    else{
    return result 
    }
}
}
function mySize(collection){
if (Array.isArray(collection)){
  return collection.length
}
else {
  return Object.values(collection).length
}
}
function myFirst(array,n){
if (n === undefined){
  return array[0]
}
else {
  return array.slice(0,n)
}
}
function myLast(array, n){
if(n === undefined){
  let a = array.length - 1
  return array[a]
}
else{
  let a = array.lentgh
  let b = array.length - n
  return array.slice(b,a)
}
}
function myKeys(object){
  return Object.keys(object)
}
function myValues(object){
  return Object.values(object)
}
function mySortBy(array, callback){
 myFilter(array,callback)
}