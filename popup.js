document.getElementById("toggle-label").addEventListener("change",(event)=>{
    const isEnabled= event.target.checked;
    chrome.storage.local.set({ extensionEnabled: isEnabled });
})