import { receiveLists } from '../actions/list_actions';

var chrome;
const chromeOptions = ['stocks', 'keys', 'lists'];

export const loadSettings = () => (dispatch) => {
  if (chrome && chrome.storage) {
    chrome.storage.sync.get(chromeOptions, function (items) {
      // TODO: update redux state with rest of settings
      dispatch(receiveLists(items.lists));
    });

    return true;
  }
  return false;
};

// If in chrome extension, sync, otherwise save to localStorage
export const saveSettings = (settings) => {
  if (chrome && chrome.storage) {
    chrome.storage.sync.set(settings, function () {
      console.log('Settings saved to chrome storage');
    });
  } else {
    for (const [key, val] of Object.entries(settings)) {
      localStorage.setItem(key, JSON.stringify(val));
    }
    console.log('Settings saved to localStorage');
  }
};
