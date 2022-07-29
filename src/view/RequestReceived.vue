<template>
  <section>
    <base-card>
      <header><h2>Requests Received</h2></header>
      <ul v-if="hasRequest">
        <RequestItem v-for="request in receivedRequest" :key="request.id" :email="request.email" :message="request.message"/>
      </ul>
      <h3 v-else>You haven't received any Requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import RequestItem from '../components/requests/RequestItem.vue'
export default {
  components:{
    RequestItem
  },
  computed:{
    ...mapGetters({
      requests: 'requests/requestList',
      haveRequest: 'requests/hasRequest'
    }),
    receivedRequest(){
      return this.requests
    },
    hasRequest(){
      return this.haveRequest
    }
  }
}
</script>

<style scoped>
  header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
