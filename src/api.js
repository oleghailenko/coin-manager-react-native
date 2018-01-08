import {bindActionCreators} from 'redux';

import {requestCoinsList} from './store/actions'
import store from './store/index';

export const actions = {
  requestCoinsList
};

export const api = {
  requestCoinList: () => {
    return fetch('https://api.coinmarketcap.com/v1/global/')
      .then(response => response.json())
      .then(payload => fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=${10}`))
      .then(response => response.json());
  },
  requestCoin: (id) => {
    return fetch(`https://api.coinmarketcap.com/v1/ticker/${id}`)
      .then((response) => response.json())
      .then((json) => json[0]);
  }
};