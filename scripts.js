//variabler
let knapp, input;

// så jag slipper det där DOCUMENT IS NOT DEFINED i JEST
if (typeof document !== "undefined"){

const knapp = document.querySelector("#button1");
const input = document.querySelector("#textInput");

// klicka på knapp något ska hända
knapp.addEventListener(

    "click", () =>{

          const versalText = changeText(input.value);
          console.log(versalText);
            input.value = "";
    });
    
}

//funktion retunerar text i stora bokstöver
function changeText(text)
{
    return text.toUpperCase();
}

//slipper jag den där erroret att module är not defined i webläsaren
if (typeof module !== "undefined"){
    module.exports = {changeText};
}

