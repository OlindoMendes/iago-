export default {
    REGISTER_COACH(state, payload){
        state.coaches.unshift(payload)
    },
    SET_COACHES(state, payload){
        state.coaches = payload
    }
}