const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(napr) {
    this.reverse = napr === false ? true : false;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error("wrong args");
    message = message.toUpperCase();
    key = key.toUpperCase();

    let maxLength = Math.max(message.length, key.length);
    let result = "";
    let j = 0;
    for (let i = 0; i < maxLength; i++) {
      let ki;
      let c = "";
      let mi = this.alphabet.indexOf(
        message[i >= message.length ? i % message.length : i]
      );
      if (mi !== -1) {
        ki = this.alphabet.indexOf(key[j >= key.length ? j % key.length : j]);
        j++;
        c = this.alphabet[
          mi + ki >= this.alphabet.length
            ? (mi + ki) % this.alphabet.length
            : mi + ki
        ];
      } else {
        c = message[i];
      }
      result += c;
      if(message.length === result.length) break
    }

    if (this.reverse) {
      return result.split("").reverse().join("");
    }

    return result;
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error("wrong args");
    message = message.toUpperCase();
    key = key.toUpperCase();

    let maxLength = Math.max(message.length, key.length);
    let result = "";
    let j = 0;
    for (let i = 0; i < maxLength; i++) {
      let ki;
      let c = "";
      let mi = this.alphabet.indexOf(
        message[i >= message.length ? i % message.length : i]
      );
      if (mi !== -1) {
        ki = this.alphabet.indexOf(key[j >= key.length ? j % key.length : j]);
        j++;
        c = this.alphabet[
          (this.alphabet.length + (mi - ki)) % this.alphabet.length
        ];
      } else {
        c = message[i];
      }
      result += c;
      if(message.length === result.length) break
    }

    if (this.reverse) {
      return result.split("").reverse().join("");
    }

    return result;
  }
}

module.exports = VigenereCipheringMachine;
