export default {
    requestList(state, rootGetters){
        const coachId = rootGetters.userId
        return state.requests.filter(request => request.coachId === coachId)
    },
    hasRequest(getters){
        return getters.requests.length > 0
    }
}