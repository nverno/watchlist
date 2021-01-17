import { combineReducers } from 'redux';

import entities from './entities_reducer';
import errors from './errors_reducer';
import settings from './settings_reducer';
import current from './current_symbol_reducer';
import ui from './ui_reducer';

export default combineReducers({
  entities,
  errors,
  settings,
  current,
  ui,
});
