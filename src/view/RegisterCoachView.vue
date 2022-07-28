<template>
  <section>
    <base-card>
      <h3>Register as a Coach!</h3>
      <coach-form></coach-form>
    </base-card>
  </section>
</template> 
<script>
import CoachForm from '../components/coaches/CoachForm.vue';
export default {
  components: {
    CoachForm,
  },
};
</script>


