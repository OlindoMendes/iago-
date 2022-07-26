<template>
  <li>
    <h3>Full Name</h3>
    <h4>$ 35,00</h4>
    <div>
      <span>Area</span>
    </div>
    <div class="actions">
      <router-link :to="coachContactLink"> Contact </router-link>
      <router-link :to="coachDetailsLink"> View Details </router-link>
    </div>
  </li>
</template>

<script>
export default {
     props:['id', 'firstName', 'lastName', 'r ate', 'areas'],
     computed: {
         fullName(){
            return this.firstName + ' ' + this.lastName
         },
         coachContactLink(){
            return this.$route.path + '/' + this.id + '/contact'
         },
         coachDetailsLink(){
            return this.$route.path +  '/' + this.id
         }
     }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
