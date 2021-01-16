var chrome;
const chromeOptions = ['stocks', 'keys'];

export const loadChromeOptions = () => {
  if (chrome && chrome.storage) {
    chrome.storage.sync.get(chromeOptions, function (items) {
      // TODO: update redux state with options
    });

    return true;
  }
  return false;
};
