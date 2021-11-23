import axios from 'axios'

export const state = () => ({
	eventsList : null,
    eventDetail : null,
    eventType : 'video',
})

export const getters = {
    getEventsList (state) {
        return state.eventsList
	},
    getEventDetail (state) {
        return state.eventDetail
	}
}

export const mutations = {
    setEventsList (state, payload) {
        state.eventsList = payload
	},
    setEventDetail (state, payload) {
        state.eventDetail = payload
	},
    setEventType (state, payload) {
        state.eventType = payload
	}
}

export const actions = {
    async fetchEventsList({commit},eventVar){
        let eventType
        if(eventVar.type == 'video') {
            eventType = 20
        } else if(eventVar.type == 'campaign & promotion') {
            eventType = 21
        } else {
            eventType = 20
        }
        try {
            let response = await axios.get(process.env.API_ENDPOINT + 'event?perPage='+eventVar.pageSize+'&page='+eventVar.page+'&filter[category]='+eventType)
            commit('setEventsList', response.data)
        } catch (error) {
            console.log('err', error)
        }
    },
    async fetchEventDetail({commit},id){
        try {
            let response = await axios.get(process.env.API_ENDPOINT + 'event/'+id)
            commit('setEventDetail', response.data)
            return response.data
        } catch (error) {
            console.log('err', error)
        }
    }
}