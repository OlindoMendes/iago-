export default {
    REGISTER_COACH(state, payload){
        console.log('payload', payload)
        state.coaches.unshift(payload)
    },
    SET_COACHES(state, payload){
        state.coaches = payload
    }
}