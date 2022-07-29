export default {
    contactCoach({commit}, payload){
        const newRequest = {
            id: new Date().toISOString(),
            coachId: payload.coachId,
            userEmail: payload.email,
            message: payload.message
        }
        commit('ADD_REQUEST', newRequest)
    }
}