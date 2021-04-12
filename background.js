chrome.commands.onCommand.addListener(function(command){
    if (command == "openYouTue"){
        chrome.tabs.create({url: "https://www.youtube.com"});
    }
});

console.log("test");