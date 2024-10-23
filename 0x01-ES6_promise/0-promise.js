export default function getResponseFromAPI() {
  const myPromise = new Promise((myResolve, myReject) => {
    myResolve();
    myReject();
  });
  myPromise.then ? () => { getResponseFromAPI.value; } : () => { getResponseFromAPI.error; };
  return myPromise;
}
