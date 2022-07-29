export default {
    ADD_REQUEST(state, payload){
        state.requests.unshift(payload)
    }
}