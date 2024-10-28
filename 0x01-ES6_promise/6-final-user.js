import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((value) => {
      const arr = [];
      for (let x of value){
        arr.push[{status: x.status, value: x.value || x.reason}];
      }
      return arr;
    })
}
