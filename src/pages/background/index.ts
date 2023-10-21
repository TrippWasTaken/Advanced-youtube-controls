import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
reloadOnUpdate('pages/background');

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */

chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
  console.log('external message to get settings');
  if (request.type === 'getSettings') {
    chrome.storage.sync.get(['ytControlsSettings']).then((result) => {
      sendResponse(result);
      console.log(result.ytControlsSettings);
    });
  }
  if (request.type === 'saveVolume') {
    chrome.storage.sync.get(['ytControlsSettings']).then((result) => {
      const { ytControlsSettings } = result;
      chrome.storage.sync.set({ ytControlsSettings: { ...ytControlsSettings, savedVolume: request.volume } });
      chrome.storage.sync.get(['ytControlsSettings']).then((test) => {
        console.log('setting edited from bg script', test.ytControlsSettings);
      });
    });
  }
});
