console.log("Content active");

document.addEventListener('keypress', logKey);

let stringStorage = '';

function logKey (keyPressed){
        console.log(keyPressed.key);
}