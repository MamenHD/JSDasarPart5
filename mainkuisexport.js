function splitString(string) {
    if (typeof string !== 'string') {
      return [];
    }
  
    return Array.from(string);
  }
 
export {splitString}; // di export menggunakan sistem named

export default function unique(array) { // di export dengan sistem default
    const set = new Set(array)
    return Array.from(set.values());
  }
  
