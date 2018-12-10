// Write your solution in this file!
const driver= {coolness: 5, skill: 10};
function updateDriverWithKeyAndValue(driver,key,value){
  const obj={...driver};
  obj[key]=value;
  return obj;
}
function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
  driver[key]=value;
  return driver;
}
function deleteFromDriverByKey(driver, key)
{const bla=Object.assign({},driver);
console.log(bla);
delete bla[key]
return bla;
}
function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver[key]
  return driver
}
