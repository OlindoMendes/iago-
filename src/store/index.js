import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index';
import requestsModule from './modules/requests';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule
  },
  state(){
    return {
      userId: new Date().toISOString
    }
  },
  getter:{
    getUserId(state){
      return state.userId
    }
  }
});

export default store;
