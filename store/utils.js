export const state = () => ({
	showContact : false,
})

export const getters = {
    getShowContact (state) {
        return state.showContact
	},
}

export const mutations = {
    setShowContact (state, payload) {
        state.showContact = payload
	},
}

export const actions = {
}