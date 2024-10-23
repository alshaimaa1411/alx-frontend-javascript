export default function getFullResponseFromAPI(success) {
  const pro = new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  pro.then(
    (value) => { getFullResponseFromAPI.value; },
    (error) => { getFullResponseFromAPI.error; });
  return pro;
  }
  