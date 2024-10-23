export default function getResponseFromAPI(){
  let myPromise = new Promise(function(myResolve, myReject) {
    myResolve(); 
    myReject();  
});
  myPromise.then(
    function(value) {true},
    function(error) {false}
);
  return myPromise;
}

