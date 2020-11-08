console.log("Content active");

document.addEventListener('keypress', logKey);

let stringStorage = '';

function logKey (keyPressed){
    // simulate keyboard non-exit signal
    if (keyPressed.key != 0){
        stringStorage += keyPressed.key;
    }
    // simulate mouse exit signal
    else{
        console.log(stringStorage);
        stringStorage = '';
    };
}