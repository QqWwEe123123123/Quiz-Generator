console.log("Content active");

document.addEventListener('keypress', logKey);

function logKey (keyPressed){
        console.log(keyPressed.key);
}