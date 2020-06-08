/*
Open a new tab, and load "my-page.html" into it.
*/
function writeToConsole() {
  console.log("injecting");
}


/*
Add openMyPage() as a listener to clicks on the browser action.
*/
browser.browserAction.onClicked.addListener(writeToConsole);
 
