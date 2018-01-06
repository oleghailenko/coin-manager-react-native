import {bindActionCreators} from 'redux';

import {greet} from './store/actions'
import store from './store';


export const actions = bindActionCreators({
  greet
}, store.dispatch);