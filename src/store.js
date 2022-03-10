import axios from "./core/axios";

const state = {
  storeCounter: 0,
  shows: [],
  search: '',
  keyword: 'girls',
};

//to handle state
/*const getters = {
  getShows(state) {
    console.log(state.shows);
    return state.shows;
  }
}*/

const mutations = {
  incrementCounter(state) {
    state.storeCounter++;
  },
  SET_SHOWS(state, data) {
      return state.shows = data
  },
  SET_Search(state, data) {
      return state.search = data
  }
};

const actions = {
    getShowsActions({ commit }) {
        axios.get('/shows')
          .then(response => {
                commit('SET_SHOWS', response.data)
        })
    },
    getSearch({ commit }) {
      axios.get('/search/shows?q='+this.keyword)
          .then(response => {
              commit('SET_Search', response.data)
        })
    }
}

export const store = {
  state,
  mutations,
  actions,
  //getters
};
