// only works when you select the popup window and type in text

let stringStorage = '';

document.getElementById("play").addEventListener('click',play);
document.getElementById("record").addEventListener('click',record);
document.getElementById("stop").addEventListener('click',stop);

document.getElementById("edit").addEventListener('click',edit);
document.getElementById("del").addEventListener('click', del);

function output (){
    console.log("StringStorage:", stringStorage);
    stringStorage = '';
}

function play(){ // play button pressed
    console.log("play pressed");
}

function record(){ // record button pressed
    document.addEventListener('keypress', logKey);
    console.log("record pressed");
}

function stop(){ // stop button pressed
    document.removeEventListener('keypress', logKey);
    console.log("stop pressed");
    output();
}

function edit(){ // edit button pressed
    console.log ("edit pressed");
}
function del(){ // delete button pressed
    console.log("delete pressed");
}

function logKey (keyPressed){
    stringStorage += keyPressed.key;
    console.log(keyPressed.key);
}