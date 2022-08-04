import { prepare, tokenify } from "./strings"

export class Convention {

  /**
   * Convert to normal words, with capitalized letter at beginning of each word, separated by space.
   * 
   * Example: Lorem Ipsum Dolor Sit Amet
   * @param str input string
   */
  static title(str: string): string {
    let prepStr = prepare(str);
    if (prepStr.length === 0) return ""

    return tokenify(prepStr).map((newStr) => newStr[0].toUpperCase() + newStr.substr(1)).join(' ');
  }

  /**
   * Convert to normal words, first letter capitalized and others in lower case, separated by space.
   * 
   * Example: Lorem ipsum dolor sit amet
   * @param str input string
   */
  static capitalized(str: string): string {
    let prepStr = prepare(str);
    if (prepStr.length === 0) return ""

    let output = tokenify(prepStr).join(' ');
    if (output.length === 0) return ""
    return output[0].toUpperCase() + output.substr(1);
  }

  /**
   * Convert to normal words, all letters in lower case, separated by space.
   * 
   * Example: lorem ipsum dolor sit amet
   * @param str input string
   */
  static normalize(str: string): string {
    let prepStr = prepare(str);
    if (prepStr.length === 0) return ""

    return tokenify(prepStr).join(' ');
  }

  /**
   * Convert to snake case, all letters in lower case, separated by underscore.
   * 
   * Example: lorem_ipsum_dolor_sit_amet
   * @param str input string
   */
  static snakeCase(str: string): string {
    let prepStr = prepare(str);
    if (prepStr.length === 0) return ""

    return tokenify(prepStr).join('_');
  }

  static pascalCase(str: string): string {
    let prepStr = prepare(str);
    if (prepStr.length === 0) return ""

    return tokenify(prepStr).map((newStr) => newStr[0].toUpperCase() + newStr.substr(1)).join('');
  }

  static camelCase(str: string): string {
    let cased = this.pascalCase(str);
    if (cased.length === 0) return ""

    return cased[0].toLowerCase() + cased.substr(1);
  }

  static kebabCase(str: string): string {
    let prepStr = prepare(str);
    if (prepStr.length === 0) return ""

    return tokenify(prepStr).join('-');
  }

  /**
   * An alias for kebab case
   * @param str input string
   */
  static slug(str: string): string {
    return this.kebabCase(str);
  }

  /**
   * Capitalize first letter of each word and join words using hyphen '-'
   * 
   * Example: Lorem-Ipsum-Dolor-Sit-Amet
   * @param str input string
   */
  static trainCase(str: string): string {
    let prepStr = prepare(str);
    if (prepStr.length === 0) return ""

    return tokenify(prepStr).map((newStr) => newStr[0].toUpperCase() + newStr.substr(1)).join('-');
  }

  /**
   * Capitalize all letters and join words using underscore '_'
   * 
   * Example: LOREM_IPSUM_DOLOR_SIT_AMET
   * @param str input string
   */
  static macroCase(str: string): string {
    let prepStr = prepare(str);
    if (prepStr.length === 0) return ""

    return tokenify(prepStr).join('_').toUpperCase();
  }

  /**
   * An alias for macro case
   * 
   * Example: LOREM_IPSUM_DOLOR_SIT_AMET
   * @param str input string
   */
  static upperCaseSnakeCase(str: string): string {
    return this.macroCase(str);
  }
  
  /**
   * Convert to dot case, all small letters, separated by dot (.)
   * @param str input string
   */
  static dotCase(str: string): string {
    let prepStr = prepare(str);
    if (prepStr.length === 0) return ""

    return tokenify(prepStr).join('.');
  }

  /**
   * Join all words and set as lower case
   * 
   * WARNING: cannot be converted to other case
   * 
   * Example: loremipsumdolorsitamet
   * @param str input string
   */
  static flatCase(str: string): string {
    let prepStr = prepare(str);
    if (prepStr.length === 0) return ""

    return tokenify(prepStr).join('');
  }
}
