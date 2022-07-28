<template>
  <section>FILTER</section>
  <section>
      <base-card>
    <div class="controls">
      <base-button mode="outline">Refresh</base-button>
      <base-button link to="/register">Register as Coach</base-button>
    </div>
    <ul v-if="hasCoach">
      <CoachItemVue
        v-for="coach in coaches"
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
