export default function getResponseFromAPI() {
  const myPromise = new Promise((myResolve, myReject) => {
    myResolve();
    myReject();
  });
  myPromise.then ? () => { this.value; } : () => { this.error; };
  return myPromise;
}
