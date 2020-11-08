let stringStorage = '';
let message = {
    txt : 'None'
};

// sender
function messageSender(){

    let params = {
        active : true,
        currentWindow : true
    }

    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs){
        console.log("Sending message: " + message.txt);
        console.log("Tabs:", tabs[0].id);
        chrome.tabs.sendMessage(tabs[0].id, message);
    }

}

// when message recieved, output it
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    console.log("Recieved message: " + message.rtn);
}

document.getElementById("play").addEventListener('click',play);
document.getElementById("record").addEventListener('click',record);
document.getElementById("stop").addEventListener('click',stop);

document.getElementById("edit").addEventListener('click',edit);
document.getElementById("del").addEventListener('click', del);

function play(){ // play button pressed
    message.txt = "play";
    console.log("play pressed");
    messageSender();
}

function record(){ // record button pressed
    message.txt = "record";
    console.log("record pressed");
    messageSender();
}

function stop(){ // stop button pressed
    message.txt = "stop";
    console.log("stop pressed");
    messageSender();
}

function edit(){ // edit button pressed
    message.txt = "edit";
    console.log ("edit pressed");
    messageSender();
}
function del(){ // delete button pressed
    message.txt = "del";
    console.log("delete pressed");
    messageSender();
}

