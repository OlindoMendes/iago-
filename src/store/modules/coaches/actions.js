// import axios from 'axios';

export default {
  async registerCoachData(context, data) {
    const userId = context.rootGetters.getUserId
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      areas: data.areas,
      description: data.description,
      hourlyRate: data.rate,
    };

    const response = await fetch(
      `https://coach-app-92996-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    const responseData = await response.json()
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!')
      throw error
    }

    context.commit('REGISTER_COACH', {
      ...coachData,
      id: userId,
    });
  },


  async loadCoaches({ commit }) {
    const response = await fetch('https://coach-app-92996-default-rtdb.firebaseio.com/coaches.json');

    const responseData = await response.json();

    if (!response.ok) {
      //code
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].last,
        description: responseData[key].description,
        rate: responseData[key].rate,
        areas: responseData[key].areas,
      };
      coaches.unshift(coach)

      commit('SET_COACHES', coaches)

    }
  },
};
