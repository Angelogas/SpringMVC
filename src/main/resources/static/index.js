let arrayWords = ["My name is Gastran"]
                  // "I am a Software Engineer",
                  // "I am the best"];
const htmlElement = document.getElementById("htmlElement");
let displayword = "";

function displayInfo(word) {
  document.querySelector(".typedCursor").classList.add("typedCursorActive");
  forward(word);
}

function forward (word, i=0) {
  if (i < word.length) {
    displayword += word[i];
    htmlElement.innerHTML = displayword;
    setTimeout(function () {
      forward(word, i+1);
    }, 100);
  } else {
    backward(word, displayword.length);
  }
}

function backward(displayword, i) {
  if (i >= 0) {
    displayword = displayword.substring(0, i);
    htmlElement.innerHTML = displayword;
    setTimeout(function () {
      backward(displayword, i-1);
    }, 100);
  } else {
    document.querySelector(".typedCursor").classList.remove("typedCursorActive");
  }
}

for (let word of arrayWords) {
  displayInfo(word)
}
