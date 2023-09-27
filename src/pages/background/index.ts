import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
reloadOnUpdate('pages/background');

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate('pages/content/style.scss');
console.log('cool listener thing');

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(sender);
  if (request.localstorage == 'ytControlsSettings') {
    sendResponse({
      ytControlsSettings: chrome.storage.sync.get(['ytControlsSettings'], function (result) {
        return result.ytControlsSettings;
      })
    });
  } else sendResponse({});
});
