console.log("background running");

chrome.browserAction.onClicked.addListener(buttonClicked)
console.log("AA");

function buttonClicked(){
    console.log("button pressed");
}
