// utils/index.js
export const randomDigits = (length) => {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
  };
  

// utils/index.js
// export const randomDigits = (length) => {
//   let result = '';
//   for (let i = 0; i < length; i++) {
//     result += Math.floor(Math.random() * 10);
//   }
//   return result;
// };
