var translateBtn = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#txt-input");
var outputTxt = document.querySelector("#txt-output");

function generateUrl(txt) {
  var uri ="https://api.funtranslations.com/translate/minion.json" + "?text=" + txt
  return(encodeURI(uri))
}

function errorHandler(error) {
  console.log("Sorry for the inconvenience, an error occured " + error)
  //to notify the user that error occured
  alert("sorry, we can only translate 5 times in an hour :( \nCome back later !")
}

function sendSignal() {
  console.log("clicked!!");
  
  fetch(generateUrl(inputTxt.value))
  .then(response => response.json())
  .then(json => { outputTxt.innerText = json.contents.translated
    console.log(json.contents.translated)})
  .catch(errorHandler)
}

translateBtn.addEventListener("click", sendSignal);