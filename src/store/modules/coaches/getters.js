export default {
    coachesGetter(state){
        return state.coaches
    },
    hasCoaches(state){
        return state.coaches && state.coaches.length > 0
    },
    isCoach(state, rootGetters){
       const coaches = state.coaches
       const userId = rootGetters.getUserId

       return coaches.some(coach => coach.id === userId)
    }
}