async function handleProfileSignup(){
  const pro1 = await uploadPhoto();
  const pro2 = await createUser();
  return Promise.all([pro1, pro2])
    .then(() => (console.log(pro1.body, pro2.firstName, pro2.lastName)))
    .catch(() => (new Error('Signup system offline')));
}
