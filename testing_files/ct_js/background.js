chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info =>{
        if (/^https:\/\/www\.google/.test(current_tab_info.url)){
            chrome.tabs.insertCSS(null, {file: 'myStyle.css'});
            chrome.tabs.executeScript(null, {file: 'content.js'}, () => console.log("i injected"));
        }
    } )
})