import axios from 'axios'

export const state = () => ({
	homeBanner : null,
})

export const getters = {
    getHomeBanner (state) {
        return state.homeBanner
	},
}

export const mutations = {
    setHomeBanner (state, payload) {
        state.homeBanner = payload
	},
}

export const actions = {
    async fetchHomeBanner({commit}){
        try {
            let response = await axios.get(process.env.API_ENDPOINT + 'banners')
            commit('setHomeBanner', response.data.data)
        } catch (error) {
            console.log('err', error)
        }
    },
}