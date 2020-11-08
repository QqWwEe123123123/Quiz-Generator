console.log("background go brrrrrrrrr");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){

    let msg = {
        txt : "hello"
    }

    // (target tab, message)
    chrome.tabs.sendMessage(tab.id, msg);
}