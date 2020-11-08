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
