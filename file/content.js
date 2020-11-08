
let stringStorage = '';

function logKey (keyPressed){
    stringStorage += keyPressed.key;
    console.log(keyPressed.key);
}

// sender
function messageSender(sender){

    let params = {
        active : true,
        currentWindow : true,
        WindowType : "popup"
    }
    let returning = {
        rtn = stringStorage
    }

    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs){
        console.log("Sending message:" + returning.rtn);
        chrome.tabs.sendMessage(sender.tab.id, returning);
    }

}

// activates only when called with a message
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){

    console.log("Recieved message: " + message);

    if (message == "record"){
        document.addEventListener('keypress', logKey);
    }
    else if (message == "stop"){
        document.removeEventListener('keypress', logKey);
        messageSender(sender);
    }
}