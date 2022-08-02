export default {
    ADD_REQUEST(state, payload){
        state.requests.unshift(payload)
    },
    SET_REQUEST(state, payload){
        return state.requests = payload
    }
}