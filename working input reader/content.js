console.log("Content active");

document.addEventListener('keydown', logKey);

function logKey (keyPressed){
    console.log(keyPressed.key);
}