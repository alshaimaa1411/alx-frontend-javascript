export default function getResponseFromAPI() {
  const myPromise = new Promise((myResolve, myReject) => {
    myResolve();
    myReject(); 
  });
  myPromise.then(
    (value) => { true },
    (error) => { false },
);
  return myPromise;
}

