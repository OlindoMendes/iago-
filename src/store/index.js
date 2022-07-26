import { createStore } from "vuex";

import coachesModule from "./modules/coaches/index";

const store = createStore({
    coaches: coachesModule

})

export default store 