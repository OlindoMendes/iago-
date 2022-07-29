<template>
  <section>
    <base-card>
      <h3>Register as a Coach!</h3>
      <coach-form @save-data="registerCoach"></coach-form>
    </base-card>
  </section>
</template>
<script>
import CoachForm from '../components/coaches/CoachForm.vue';
import { mapActions,  } from 'vuex';
export default {
  components: {
    CoachForm,
  },
  methods: {
    ...mapActions({
      newCoach: 'coaches/registerCoachData',
    }),
    registerCoach(data) {
      this.newCoach(data);
      this.$router.replace('/coaches');
    },
  },
  computed: {  },
};
</script>
