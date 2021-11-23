import axios from 'axios'

export const state = () => ({
	searchList : null,
})

export const getters = {
    getSearchList (state) {
        return state.searchList
	},
}

export const mutations = {
    setSearchList (state, payload) {
        state.searchList = payload
	},
}

export const actions = {
    async fetchSearchList({commit},val){
        try {
            let response = await axios.get(process.env.API_ENDPOINT + 'search/'+val)
            console.log('search',response.data)
            commit('setSearchList', response.data)
        } catch (error) {
            console.log('err', error)
        }
    },
}