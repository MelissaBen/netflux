import axios from "./core/axios";

const state = {
    storeCounter: 0,
    shows: null,
    search: null,
    show: null,
    episodes: null,
    saisons: null,
    episode: null,
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

    SET_SHOW_DETAILS(state, data) {
        return state.show = data
    },
    SET_SHOW_SEASONS(state, data) {
        return state.saisons = data
    },
    SET_SHOW_EPISODES(state, data) {
        return state.episodes = data
    },
    SET_SINGLE_EPISODES(state, data) {
        return state.episode = data
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
        axios.get('/search/shows?q=' + keyword)
            .then(response => {
                console.log(response.data)
                commit('SET_Search', response.data)
            })
    },

    getSingleShow({ commit }, id) {
        axios.get('/shows/' + id)
            .then(response => {
                commit('SET_SHOW_DETAILS', response.data)
            })
    },

    getSingleShowSaisons({ commit }, id) {
        axios.get('/shows/' + id + '/seasons')
            .then(response => {
                commit('SET_SHOW_SEASONS', response.data)
            })
    },

    getSingleShowEpisodes({ commit }, id) {
        axios.get('/shows/' + id + '/episodes')
            .then(response => {
                commit('SET_SHOW_EPISODES', response.data)
            })
    },

    getSingleEpisode({ commit }, id) {
        axios.get('/episodes/' + id)
            .then(response => {
                commit('SET_SINGLE_EPISODES', response.data)
            })
    },
    addComment(id, form) {
        axios.post('http://localhost:3000/comments', {
                'show_id': id,
                'username': form.username,
                'content': form.content,
            })
            .then(response => {
                console.log(response)
            })
    },


}

export const store = {
    state,
    mutations,
    actions,
    //getters
};