export default function uploadPhoto(filename) {
  if (filename !== 'string') {
    return  Promise.reject(new Error(`${filename}` + ' cannot be processed'));
  }
}
