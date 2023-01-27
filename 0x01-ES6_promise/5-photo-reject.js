export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    if (typeof fileName !== 'string') {
      reject(new Error(`${fileName} cannot be processed`));
    } else {
      resolve();
    }
  });
}
