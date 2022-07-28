<template>
  <section><coach-filter @change-filter="setFilter"></coach-filter></section>
  <section>
      <base-card>
    <div class="controls">
      <base-button mode="outline">Refresh</base-button>
      <base-button link to="/register">Register as Coach</base-button>
    </div>
    <ul v-if="hasCoach">
      <CoachItemVue
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :id="coach.id"
        :firstName="coach.firstName"
        :lastName="coach.lastName"
        :rate="coach.hourlyRate"
        :areas="coach.areas"
      />
    </ul>
    <h3 v-else>Not coaches registered yet</h3>
      </base-card>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import CoachItemVue from '../components/coaches/CoachItem.vue';
import CoachFilter from '../components/coaches/CoachFilter.vue';
export default {
  components: {
    CoachItemVue,
    CoachFilter
  },
  data(){
   return {
    activeFilter: {
      frontend: true,
      backend: true,
      career:true
    }
   } 
  },
  methods:{
    setFilter(updatedFilters){
       this.activeFilter = updatedFilters
    }
  },
  computed: {
    ...mapGetters({
      coaches: 'coaches/coachesGetter',
      checkCoach: 'coaches/hasCoaches',
    }),
    filteredCoaches() {
      const coach = this.coaches
      return coach.filter(coach => {
        if(this.activeFilter.frontend && coach.areas.includes('frontend')) return true
        if(this.activeFilter.backend && coach.areas.includes('backend')) return true
        if(this.activeFilter.career && coach.areas.includes('career')) return true
        return false
      })
    },
    hasCoach() {
      return this.checkCoach;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
