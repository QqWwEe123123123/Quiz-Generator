document.getElementById("play").addEventListener('click',play);
document.getElementById("record").addEventListener('click',record);
document.getElementById("stop").addEventListener('click',stop);

document.getElementById("edit").addEventListener('click',edit);
document.getElementById("del").addEventListener('click', del);

function play(){ // play button pressed
    console.log("play pressed");
}
function record(){ // record button pressed
    console.log("record pressed");
}
function stop(){ // stop button pressed
    console.log("stop pressed");
}
function edit(){
    console.log ("edit pressed");
}
function del(){
    console.log("delete pressed");
}