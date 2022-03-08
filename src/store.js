import axios from "./core/axios";

const state = {
  storeCounter: 0,
  shows: [],
  search: [],
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
const getters = {}

const actions = {
    getPosts({ commit }) {
        axios.get('/shows')
            .then(response => {
                commit('SET_POSTS', response.data)
        })
    },
    getShows({ commit }) {
        axios.get('/shows')
            .then(response => {
                commit('SET_SHOWS', response.data)
        })
    },
    getSearch({ commit }) {
        axios.get('/singlesearch/shows?q=:query')
            .then(response => {
                commit('SET_Search', response.data)
        })
    }
}

export const store = {
  state,
  mutations,
  actions,
  getters
};
