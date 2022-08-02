<template>
<base-dialog :show="!!error" title="An error occurred!" @close="closeModel">
<p>{{error}}</p></base-dialog>
  <section><coach-filter @change-filter="setFilter"></coach-filter></section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadCoaches">Refresh</base-button>
        <base-button v-if="!coachVerify && !isLoading" link to="/register"
          >Register as Coach</base-button
        >
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoach">
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
import { mapActions, mapGetters } from 'vuex';
import CoachItemVue from '../components/coaches/CoachItem.vue';
import CoachFilter from '../components/coaches/CoachFilter.vue';
export default {
  components: {
    CoachItemVue,
    CoachFilter
  },
  data(){
   return {
    isLoading: false,
    error: null,
    activeFilter: {
      frontend: true,
      backend: true,
      career:true
    }
   }
  },
  methods:{
    ...mapActions({
      loadCoaches: 'coaches/loadCoaches'
    }),
    closeModal(){
      this.error = null
    },
    setFilter(updatedFilters){
       this.activeFilter = updatedFilters
    },
    async loadCoaches(){
      this.isLoading = true
      try {

        await this.loadCoaches
      } catch (error) {
        this.error = error.message || 'Something was wrong'
      }
      this.isLoading = false
      console.log(this.isLoading)
    }

  },
  created(){
    this.loadCoaches
  },
  computed: {
    ...mapGetters({
      coaches: 'coaches/coachesGetter',
      checkCoach: 'coaches/hasCoaches',
      isCoach: 'coaches/isCoach'

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
      return !this.isLoading && this.checkCoach;
    },
    coachVerify() {
      return this.isCoach;
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
