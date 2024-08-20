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
function myMap(arr,callback){
function callback(ar){

}
}
function myReduce(){

}
function myFind(){

}
function myFilter(){

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