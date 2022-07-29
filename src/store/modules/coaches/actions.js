export default {
  registerCoachData(context, data) {
    console.log(data)
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.description,
      rate: data.rate,
      areas: data.areas,
    };
    context.commit('REGISTER_COACH', coachData);
  },
};
