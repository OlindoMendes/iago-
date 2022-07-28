<template>
  <section>
    <base-card>
      <h2>{{fullName}}</h2>
      <h3>$ {{rate}} /hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
      <p>{{description}}</p>
    </base-card>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  created() {
    this.selectedCoach = this.coaches.find(coach => coach.id === this.id)
  },
  computed: {
    ...mapGetters({
      coaches: 'coaches/coachesGetter',
    }),
    areas(){
        return this.selectedCoach.areas
    },
    rate(){
        return this.selectedCoach.hourlyRate
    },
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    description(){
        return this.selectedCoach.description
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
  },
};
</script>
