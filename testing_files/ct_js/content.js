console.log("YESSSSSSSSSS");

chrome.runtime.onMessage.addListener( function(message, sender, sendResponse) {
    console.log("Image was clicked" + " " + message.txt);

    if (message.txt == "hello"){
        let paragraphs = document.getElementsByTagName('p');

        for (elt of paragraphs){
            elt.style['background-color'] = '#FF00FF';
        }
        console.log("Changing bg color to pink!");
    }
})