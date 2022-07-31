export default {
    ADD_REQUEST(state, payload){
        console.log(payload)
        state.requests.unshift(payload)
    }
}