function encryptText(text)
{
  text = text.replace(/e/g, "enter");
  text = text.replace(/i/g, "imes");
  text = text.replace(/a/g, "ai");
  text = text.replace(/o/g, "ober");
  text = text.replace(/u/g, "ufat");
  
  return text;
}

function decryptText(text)
{
  text = text.replace(/enter/g, "e");
  text = text.replace(/imes/g, "i");
  text = text.replace(/ai/g, "a");
  text = text.replace(/ober/g, "o");
  text = text.replace(/ufat/g, "u");
  
  return text;
}

document.getElementById("encryptButton").addEventListener("click", function() {
  let inputText = document.getElementById("input").value.toLowerCase();
  let encryptedText = encryptText(inputText);

  document.getElementById("output").style.backgroundImage = "none";
  document.getElementById("output").innerText = encryptedText;
  document.getElementById("popup").innerText = "Text encrypted!";
  document.getElementById("popup").style.display = "block";
});

document.getElementById("decryptButton").addEventListener("click", function() {
  let inputText = document.getElementById("input").value.toLowerCase();
  let decryptedText = decryptText(inputText);

  document.getElementById("output").style.backgroundImage = "none";
  document.getElementById("output").innerText = decryptedText;
  document.getElementById("popup").innerText = "Text decrypted!";
  document.getElementById("popup").style.display = "block";
});

document.getElementById("copyButton").addEventListener("click", function() {
  let outputText = document.getElementById("output");
  let range = document.createRange();

  range.selectNode(outputText);

  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  document.execCommand("copy");
  document.getElementById("popup").innerText = "Text copied!";
  document.getElementById("popup").style.display = "block";
});
