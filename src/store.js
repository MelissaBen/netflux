import axios from "./core/axios";

const state = {
  storeCounter: 0,
  shows: [],
  search: '',
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
  getSearch({ commit }, keyword) {
      console.log(keyword)
      axios.get('/search/shows?q='+keyword)
        .then(response => {
            console.log(response.data)
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
