import { createStore } from 'vuex';

interface State {
    msg: string;
}

const store = createStore<State>({
  state() {
    return {
      msg: 'App Online',
    };
  },
  mutations: {
    updateMsg(state) {
      state.msg = 'App Offline';
    },
  },
});

export default store;
