import Vuex from 'vuex'
import commonActions from './actions/actions'
import apiRequests from './actions/api-requests'
import mutations from './mutations/mutations';
import getters from './getters/getters';

const actions = {...commonActions, ...apiRequests}


let store = new Vuex.Store({
    state: {
      searchValue: '',
      isMobile: false,
      isDesktop: true,
      products: [],
      cart: []
    },
    mutations: {},
    actions: {},
    getters: {},
  });

export default store;