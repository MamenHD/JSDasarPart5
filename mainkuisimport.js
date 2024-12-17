import unique from "./mainkuisexport.js"; // di import dengan sistem manual

import { splitString } from "./mainkuisexport.js"; // di import dengan sistem named

const string = 'saippuakivikauppias';
const array = splitString(string);
const uniqueArray = unique(array);

console.log(string);
console.log(array);
console.log(uniqueArray);
