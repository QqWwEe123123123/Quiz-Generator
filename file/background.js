// let cnt = 0;

//=======================================================================
//button press
document.getElementById("play").addEventListener('click',play);
document.getElementById("record").addEventListener('click',record);
document.getElementById("stop").addEventListener('click',stop);

document.getElementById("edit").addEventListener('click', edit);
document.getElementById("del").addEventListener('click', del);

function play(){ // play button pressed
    console.log("play pressed");
    // cnt += 1 // temp?
}
function record(){ // record button pressed
    console.log("record pressed");
    // saveChanges("123"); // temp
}
function stop(){ // stop button pressed
    console.log("stop pressed");
    // callValue("123"); // temp
}
function edit(){ // edit button pressed
    console.log ("edit pressed");
}
function del(){ // delete button pressed
    console.log("delete pressed");
}

//========================================================================
//saving data
// function saveChanges(key){
//     var value = cnt;
//     if (!value){ // check if value is not empty
//         console.log("Error: No value specified");
//         return
//     }
//     chrome.storage.sync.set({key: value}, function() {
//         console.log(value);
//         // Notify that we saved.
//         console.log('Settings saved');
//     });
// }
// function callValue(key_){
//     chrome.storage.sync.get([key_], function(result) {
//         console.log('Value currently is ' + result.key);
//     });
// }
