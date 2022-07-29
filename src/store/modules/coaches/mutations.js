export default {
    REGISTER_COACH(state, payload){
        state.coaches.unshift(payload)
    }
}