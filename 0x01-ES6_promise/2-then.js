export default function handleResponseFromAPI(promise) {
  return new promise
  .then(() => {
    console.log("Got a response from the API");
    return { status: 200, body: 'Success' };
  })
  .catch(() => {
    return new Error();
  });
}
