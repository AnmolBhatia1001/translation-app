var btnOne = document.querySelector("#btnOne");
var inputtextarea = document.querySelector("#textareaOne");
var outputareaOne = document.querySelector("#outputareaOne");

btnOne.addEventListener("click", () => {
  var userInput = inputtextarea.value;
  var urlOne = "https://api.funtranslations.com/translate/minion.json";
  var reqURL = `${urlOne}?text=${userInput}`;
  fetch(encodeURI(reqURL))
    .then((response) => response.json())
    .then((output) => (outputareaOne.innerText = output.contents.translated))
    .catch((error) => {
      console.log(error);
      alert(`Somthing Went Wrong Please Try Again Later`);
    });
});

