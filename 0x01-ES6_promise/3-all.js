import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const name = createUser();
  return Promise
    .then([photo, name])
    .then((response) => {
      console.log(`${response[0].body} ${response[1].firstName} ${response[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
