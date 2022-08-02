
import axios from 'axios'
export default {
    async contactCoach({commit}, payload){
        const newRequest = {
            email: payload.email,
            message: payload.message
        }
        const response = await axios.post(`https://vue-api-study-8ac61-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`)
        const responseData = await response.json()

        if(!response.ok){
            const error = new Error(responseData.message || 'Failed to send reqest.')
            throw error
        }

        newRequest.coachId = payload.coachId
        newRequest.id = responseData.name


        commit('ADD_REQUEST', newRequest)
    },

    async fetchRequests(context){
        const coachId = context.rootGetters.getUserId

        const response = await axios.post(`https://vue-api-study-8ac61-default-rtdb.firebaseio.com/requests/${coachId}.json`)
        const responseData = await response.json()

        if(!response.ok){
            const error = new Error(responseData.message || 'Failed to send reqest.')
            throw error
        }

        const requests = []

        for(const key in responseData){
            const request = {
                id: key,
                coachId: coachId,
                email: responseData[key].email,
                message: responseData[key].message
            }
            requests.unshift(request)
        }
        context.commit('SET_RQUESTS', requests)
    }

}