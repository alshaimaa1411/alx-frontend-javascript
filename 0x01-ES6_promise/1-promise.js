export default function getFullResponseFromAPI(success){
    let pro = new Promise(function(resolve, reject) {
      if(success){
        resolve({status: 200, body: 'Success'})
      }
      else {
        reject(new Error('The fake API is not working currently'))
      }
    });
    pro.then(
      function(value) {getFullResponseFromAPI.value},
      function(error) {getFullResponseFromAPI.error});
    return pro;
  }
  