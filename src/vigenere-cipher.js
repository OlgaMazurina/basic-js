class VigenereCipheringMachine {
  constructor(bool) {
    if (bool == true || bool == null) {
      this.directMachine = true;
    } else {
      this.directMachine = false;
    }
  }
  encrypt(message, key) {
    if (message == null || key == null) {
      throw Error;
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let messageWithoutSpaces = message.split(" ").join("");

    while (messageWithoutSpaces.length > key.length) {
      key += key;
    }

    if (key.length > messageWithoutSpaces.length) {
      key = key.substring(0, messageWithoutSpaces.length);
    }

    let messageLetterCode;
    let keyLetterCode;
    let lettersNumber = 26;
    let codeLetter;
    let encryptedMessage = "";
    for (let i = 0; i < messageWithoutSpaces.length; i++) {
      messageLetterCode = messageWithoutSpaces.charCodeAt(i);
      if (messageLetterCode < 65 || messageLetterCode > 90) {
        encryptedMessage += messageWithoutSpaces[i];
      } else {
        keyLetterCode = key.charCodeAt(i);
        codeLetter = (messageLetterCode + keyLetterCode) % lettersNumber;
        encryptedMessage += String.fromCodePoint(codeLetter + 65);
      }
    }

    let space = 0;
    let total = "";
    for (let i = 0; i < message.length; i++) {
      if (message[i] !== " ") {
        total += encryptedMessage[i - space];
      } else {
        total += " ";
        space += 1;
      }
    }

    if (!this.directMachine) {
      total = total.split("").reverse().join("");
    }
    return total;
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage == null || key == null) {
      throw Error;
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let messageWithoutSpaces = encryptedMessage.split(" ").join("");

    while (messageWithoutSpaces.length > key.length) {
      key += key;
    }

    if (key.length > messageWithoutSpaces.length) {
      key = key.substring(0, messageWithoutSpaces.length);
    }
    let encryptedMessageLetterCode;
    let keyLetterCode;
    let lettersNumber = 26;
    let messageLetter;
    let decryptedMessage = "";
    for (let i = 0; i < messageWithoutSpaces.length; i++) {
      encryptedMessageLetterCode = messageWithoutSpaces.charCodeAt(i);
      if (encryptedMessageLetterCode < 65 || encryptedMessageLetterCode > 90) {
        decryptedMessage += messageWithoutSpaces[i];
      } else {
        keyLetterCode = key.charCodeAt(i);
        messageLetter =
          (encryptedMessageLetterCode + lettersNumber - keyLetterCode) %
          lettersNumber;
        decryptedMessage += String.fromCodePoint(messageLetter + 65);
      }
    }
    let space = 0;
    let total = "";
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i] !== " ") {
        total += decryptedMessage[i - space];
      } else {
        total += " ";
        space += 1;
      }
    }

    if (!this.directMachine) {
      total = total.split("").reverse().join("");
    }
    return total;
  }
}

module.exports = VigenereCipheringMachine;
