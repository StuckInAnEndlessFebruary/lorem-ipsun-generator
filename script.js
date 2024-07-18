var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
};

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider2.oninput = function () {
  output2.innerHTML = this.value;
};
const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

var write = document.getElementById("write");
button.addEventListener("click", function () {
  str = "";
  wpp = slider2.value;
  sentence = getFirstNWords(wpp);
  tag = document.getElementById("tagselect").value;

  if (document.getElementById("includeselect").value == "yes") {
    for (let i = 0; i < Number(slider.value); i++) {
      str += `<${tag}>${sentence}</${tag}>` + "\n";
    }
    write.value = str;
  } else {
    for (let i = 0; i < Number(slider.value); i++) {
      str += `${sentence}` + "\n";
    }
    write.value = str;
  }
});
function getFirstNWords(n) {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const words = text.split(" ");
  const numWords = n;

  // Get the first n words
  const firstNWords = words.slice(0, numWords).join(" ");

  // Display the result
  return firstNWords;
}
