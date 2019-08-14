import {createStore} from 'redux';

import CalReducer from './reducer/CallReducer.js';

const store = createStore(CalReducer);


export default store;