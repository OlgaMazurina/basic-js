

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

      while (message.length > key.length) {
        key += key;
      }

      if (key.length > message.length) {
        key = key.substring(0, message.length);
      }

      let messageLetterCode;
      let keyLetterCode;
      let lettersNumber = 26;
      let codeLetter;
      let encryptedMessage = '';
      for (let i = 0; i < message.length; i++) {
        messageLetterCode = message.charCodeAt(i);
        if (messageLetterCode < 65 || messageLetterCode > 90) {
          encryptedMessage += message[i];
        } else {
        keyLetterCode = key.charCodeAt(i);
        codeLetter = (messageLetterCode + keyLetterCode) % lettersNumber;
        encryptedMessage += String.fromCodePoint(codeLetter + 65);
        }
      }
      if (!this.directMachine) {
        encryptedMessage = encryptedMessage.split('').reverse().join('');

      }
      return encryptedMessage;
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage == null || key == null) {
      throw Error;
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    while (encryptedMessage.length > key.length) {
      key += key;
    }

    if (key.length > encryptedMessage.length) {
      key = key.substring(0, encryptedMessage.length);
    }
    let encryptedMessageLetterCode;
    let keyLetterCode;
    let lettersNumber = 26;
    let messageLetter;
    let decryptedMessage = '';
    for (let i = 0; i < encryptedMessage.length; i++) {
      encryptedMessageLetterCode = encryptedMessage.charCodeAt(i);
      if (encryptedMessageLetterCode < 65 || encryptedMessageLetterCode > 90) {
        decryptedMessage += encryptedMessage[i];
      } else {
        keyLetterCode = key.charCodeAt(i);
        messageLetter = (encryptedMessageLetterCode + lettersNumber - keyLetterCode) % lettersNumber;
        decryptedMessage += String.fromCodePoint(messageLetter + 65);
      }

    }
    if (!this.directMachine) {
      decryptedMessage = decryptedMessage.split('').reverse().join('');

    }
    return decryptedMessage;

  }
}

module.exports = VigenereCipheringMachine;
