import axios from "./core/axios";

const state = {
  storeCounter: 0,
  shows: [],
  search: {},
};

const mutations = {
  incrementCounter(state) {
    state.storeCounter++;
  },
  SET_SHOWS(state, shows) {
      state.shows = shows
  },
  SET_Search(state, search) {
      state.search = search
  }
};

//to handle state
/*const getters = {
  getSearch(state) {
    console.log('cc' , state.search);
    return state.shows;
  }
}*/

const actions = {
    getShows({ commit }) {
        axios.get('/shows')
            .then(response => {
                commit('SET_SHOWS', response.data)
        })
    },
    getSearch({ commit }) {
        axios.get('/singlesearch/shows?q=girls')
          .then(response => {
                console.log(response.data)
                commit('SET_Search', response.data)
        })
    }
}

export const store = {
  state,
  mutations,
  actions
};
