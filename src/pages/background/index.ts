import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
reloadOnUpdate('pages/background');

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
console.log('does this reload');

const functionTest = () => {
  chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
    console.log('Received message from  ', request);
    if (request === 'ytControlsSettings') {
      chrome.storage.sync.get(['ytControlsSettings']).then((result) => sendResponse(result));
    } else sendResponse(null);
  });
};

functionTest();
