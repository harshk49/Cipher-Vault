function encryptMessage() {
  
  var originalMessage = document.getElementById("original").value;
  var cipher = document.getElementById("cipher").value;
  var shift = document.getElementById("shift").value;

  
  if (cipher === "caesar") {
      var encryptedMessage = "";

      
      for (var i = 0; i < originalMessage.length; i++) {
          
          var charCode = originalMessage.charCodeAt(i);
          if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
              
              var newCharCode = charCode + shift;

              
              if (newCharCode > 90 && charCode <= 65) {
                  newCharCode -= 26;
              } else if (newCharCode > 122 && charCode >= 97) {
                  newCharCode -= 26;
              }
              encryptedMessage += String.fromCharCode(newCharCode);
          } else {
              encryptedMessage += originalMessage[i];
          }
      }

      
      document.getElementById("encrypted").value = encryptedMessage;
  }
}
function decryptMessage() {
  var original = document.getElementById('original').value;
  var cipher = document.getElementById('cipher').value;
  var shift = document.getElementById('shift').value;
  var encrypted = document.getElementById('encrypted');

  if (cipher === 'caesar') {
      var decrypted = '';
      for (var i = 0; i < original.length; i++) {
          var charCode = original.charCodeAt(i);
          if (charCode >= 65 && charCode <= 90) {
              decrypted += String.fromCharCode((charCode - 65 - shift + 26) % 26 + 65);
          } else if (charCode >= 97 && charCode <= 122) {
              decrypted += String.fromCharCode((charCode - 97 - shift + 26) % 26 + 97);
          } else {
              decrypted += original[i];
          }
      }
      encrypted.value = decrypted;
  }
}

function compressMessage() {
  var original = document.getElementById('original').value;
  var compressed = document.getElementById('compressed');

  var compressedMessage = '';
  for (var i = 0; i < original.length; i++) {
      var count = 1;
      while (i + 1 < original.length && original[i] === original[i + 1]) {
          count++;
          i++;
      }
      compressedMessage += original[i] + count;
  }
  compressed.value = compressedMessage;
}

function decompressMessage() {
  var compressed = document.getElementById('compressed').value;
  var decompressed = document.getElementById('decompressed');

  var decompressedMessage = '';
  for (var i = 0; i < compressed.length; i += 2) {
      var char = compressed[i];
      var count = parseInt(compressed[i + 1]);
      for (var j = 0; j < count; j++) {
          decompressedMessage += char;
      }
  }
  decompressed.value = decompressedMessage;
}