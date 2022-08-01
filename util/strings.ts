const separators = [' ', '.', '-', '_']
const prefixes = ['$', '_', '@']

/**
 * Tokenify string as array of lower case word.
 * Only works on single separator type.
 * Multiple separator types returned as empty array.
 * @param str input string
 */
export function tokenify(str: string): Array<string> {
  let separatorFound: string = ''
  let tokenCounter = 0;
  for (let i = 0; i < separators.length; i++) {
    let found: number = str.indexOf(separators[i]);
    if (found > -1) {
      if (tokenCounter === 0) {
        separatorFound = separators[i];
      }
      tokenCounter++;
    }
  }

  // return empty array for strings containing inconsistent, multiple separators like "lo-rem ipsum"
  if (tokenCounter > 1) return [];
  
  if (separatorFound !== '') {

    return removeEmptyStringElements(str.split(separatorFound).map((token) => token.toLowerCase())); 
  } else {
    let alterStr = str.toLowerCase();
    let upperCaseIndexes: Array<number> = [];
    for (let k=1; k<str.length; k++) {
      if (str[k] === str[k].toUpperCase()) upperCaseIndexes.push(k);
    }
    if (upperCaseIndexes.length === 0) {

      return removeEmptyStringElements([str]);
    } else {
      for (let m=0; m<upperCaseIndexes.length; m++) {
        alterStr = alterStr.substr(0,upperCaseIndexes[m] + m) + ' ' + alterStr.substr(upperCaseIndexes[m] + m);
      }

      return removeEmptyStringElements(alterStr.split(' '));
    }
  }
}

/**
 * Check and pre-format input string, altering if necessary,
 * or return empty string if input is not suitable
 * @param str input string
 */
export function prepare(str: string): string {
  if (!isProcessable(str)) return ""

  return removeVariablePrefix(str);
}

/**
 * Check if input string is processable
 * @param str input string
 */
function isProcessable(str: string): boolean {
  // do not process empty string
  if (str.length === 0) return false;
  
  return true;
} 

function removeEmptyStringElements(arrStr: Array<string>): Array<string> {
  let cleaned: Array<string> = []
  arrStr.forEach((str) => {
    if (str.length > 0) cleaned.push(str);
  })
  return cleaned;
}

function removeVariablePrefix(str: string): string {
  return (prefixes.includes(str[0])) ? str.substr(1) : str;
}