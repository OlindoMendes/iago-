export default {
    coachesGetter(state){
        return state.coaches
    },
    hasCoaches(state){
        return state.coaches && state.coaches.length > 0
    }
}