import axios from 'axios';

export default {
  async registerCoachData(context, data) {
    console.log(data);
    const userId = data.id;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.description,
      rate: data.rate,
      areas: data.areas,
    };

    const response = await axios(
      `https://vue-api-study-8ac61-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    // const responseData = await response.json()
    if (!response.ok) {
      //CODE
    }

    context.commit('REGISTER_COACH', {
      ...coachData,
      id: userId,
    });
  },
  async loadCoaches({ commit }) {
    const response = axios(`https://vue-api-study-8ac61-default-rtdb.firebaseio.com/coaches.json`);

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
