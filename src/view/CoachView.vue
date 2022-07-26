<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
    </div>
    <ul v-if="hasCoach">
      <CoachItemVue
        v-for="coach in coaches"
        :key="coach.id"
        id="coach.id"
        :firstName="coach.firstName"
        :lastName="coach.lastName"
        :rate="coach.hourlyRate"
        :areas="coach.areas"
      />
    </ul>
    <h3 v-else>Not coaches registered yet</h3>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import CoachItemVue from '../components/coaches/CoachItem.vue';
export default {
  components: {
    CoachItemVue,
  },
  computed: {
    ...mapGetters({
      coaches: 'coaches/coachesGetter',
      checkCoach: 'coaches/hasCoaches',
    }),
    filteredCoaches() {
      return this.coaches;
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
