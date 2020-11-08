console.log("background go brrrrrrrrr");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){

    let msg = {
        txt : "hello"
    }

    chrome.tabs.sendMessage(tab.id, msg);
}