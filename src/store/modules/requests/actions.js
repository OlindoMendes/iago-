export default {
    contactCoach({commit}, payload){
        const newRequest = {
            id: new Date().toISOString(),
            coachId: payload.coachId,
            email: payload.email,
            message: payload.message
        }
        commit('ADD_REQUEST', newRequest)
    }
}